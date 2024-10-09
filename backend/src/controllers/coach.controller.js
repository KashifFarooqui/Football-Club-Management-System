import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import {Coach} from '../models/coach.models.js';

const coachregister = async (req, res) => {
    try {
        const { coachid, password, email, coachname } = req.body;
        console.log('Received request:', req.body);
        // Validate that all fields are provided
        if (!coachid || !password || !email) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }

        // Check if the coach ID exists in the database
        const coach = await Coach.findOne({ coachid });
        console.log(coach);
        
        if (coach) {
            // If the coach exists, update the email, password, and coach name
            coach.email = email;
            coach.password = await bcrypt.hash(password, 10);  // Hash the new password
            coach.coachname = coachname;

            // Save the updated coach details
            await coach.save();

            return res.status(201).json({
                message: "Coach information updated successfully.",
                success: true,
                coach
            });
        } else {
            // If the coach ID doesn't exist, return an error
            return res.status(404).json({
                message: "Coach ID not found. Please check the coach ID.",
                success: false
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to register/update coach.",
            success: false,
            error: error.message
        });
    }
};



const coachlogin = async (req, res) => {
    try {
        const { coachid, password } = req.body;

        if (!coachid || !password) {
            return res.status(400).json({
                message: "Email and password are required",
                success: false
            });
        }

        const coach = await Coach.findOne({ coachid });
        if (!coach) {
            return res.status(404).json({
                message: "Coach doesn't exist",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, coach.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }

        const age = 1000 * 60 * 60 * 24 * 7; 
        const token = jwt.sign(
            { id: coach._id },
            process.env.JWT_SECRET,
            { expiresIn: age }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age
        });

        return res.status(200).json({
            message: "Coach Login successful",
            success: true,
            token
        });

    } catch (error) {
        console.error("CoachLogin Error:", error);
        return res.status(500).json({
            message: "Failed to login",
            success: false
        });
    }
};

const coachlogout = async (req, res) => {
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
    coachregister,
    coachlogin,
    coachlogout
};