import User from '../models/user.models.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    try {
        const { username, email, password, address} = req.body;
        console.log(req.body);
        

        if (!username || !email || !password || !address) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = await User.create({
            username,
            email,
            address,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            newUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to register user",
            success: false,
            error: error.message 
        });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }

        const age = 1000 * 60 * 60 * 24 * 7; 
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: age }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age
        });

        return res.status(200).json({
            message: "Login successful",
            success: true,
            token
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Failed to login",
            success: false
        });
    }
};


const updateProfile = async (req, res) => {
    try {
        const { username, email, address } = req.body;  // Extract the necessary fields from the request body

        // Update the user profile by email
        const updatedUser = await User.findOneAndUpdate(
            { email },  // Find user by email
            { username, address },  // Fields to update
            { new: true }  // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        // Send the updated user data in the response
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser  // Return the updated user data
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({
            message: "Error updating profile",
            success: false,
            error: error.message
        });
    }
};




const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "Strict",
            secure: true, 
        })

        return res.status(200).json({
            message: "Logout successful",
            success: true
        });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({
            message: "Failed to logout",
            success: false
        });
    }
};

export {
    register,
    login,
    updateProfile,
    logout
};
