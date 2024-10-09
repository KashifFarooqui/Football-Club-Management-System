import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
    coachname:{
        type:String,
        required:true
    },
    coachid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

},{timestamps: true});

export const Coach = mongoose.model("Coach",coachSchema);

