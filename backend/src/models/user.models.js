import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    registerType: {
        type: String,
        required: true,
        enum: ["coach", "player", "user"]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;









