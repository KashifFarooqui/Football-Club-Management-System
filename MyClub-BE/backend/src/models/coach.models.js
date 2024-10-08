import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
    coachName:{
        type:String,
        required:true
    },
    coachID:{
        type:String,
        required:true
    },
    coachPawssword:{
        type:String,
        required:true
    },
    coachSalary:{
        type:String,
        required:true
    },
    coachPosition:{
        type:String,
        required:true
    },

},{timestamps: true});

export const Coach = mongoose.model("Coach",coachSchema);

