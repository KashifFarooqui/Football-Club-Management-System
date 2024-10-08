import User from '../models/user.models.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const genTokens =  async(userId) => {
        try {
            const user = await User.findById(userId)
            const accessToken = user.generateAccessToken()
            const refreshToken = user.generateRefreshToken()

            user.refreshToken = refreshToken
            await user.save({validateBeforeSave: false})

            return{accessToken, refreshToken}

        } catch (error) {
            console.error("Token Error:", error);
        return res.status(500).json({
            message: "Something Went Wrong",
            success: false
        });
        }
}


const register = async (req, res) => {
    
        const { username, email, password, confirmPassword } = req.body;
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords don't match",
                success: false
            });
        }
        
        const newUser = await User.create({
            username,
            email,
            password // This is now saved as plain text
        });

    
        console.log("New User Password:", newUser.password)
        return res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });
}


const login = async (req, res) => {
    try {
        const {email, username, password} = req.body
    console.log(email);

    if (!username && !email) {
        return res.status(200).json({
            message: "Username or email is required",
            success: false
        });
    }
        const user = await User.findOne({
            $or: [{username}, {email}]
        })
    
        if (!user) {
            return res.status(200).json({
                message: "User Dosen't exists",
                success: false
            });
        }

       
        console.log("Attempting login with email:", email);
        console.log("Entered Password:", password);
        console.log("Stored Password:", user.password); // For debugging only

        // Compare the trimmed password with the stored hashed password
        const isPasswordValid = await user.isPasswordCorrect(password)

        if (!isPasswordValid) {
            return res.status(200).json({
                message: "Invalid Password",
                success: false
            });
         }

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign(
            { id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: age }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age
        });

        return res.status(200).json({
            message: "Login Successfully",
            success: true
        });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Failed to login",
            success: false
        });
    }
};




    


// const loggoutUser = async(req,res,next) => {

// }
export {
    register,
    login
};
