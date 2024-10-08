import mongoose from "mongoose"

const playerSchema = new mongoose.Schema({
    playerName:{
        type:String,
        required:true
    },
    playerID:{
        type:String,
        required:true
    },
    playerPassword:{
        type:String,
        required:true
    },
    playerSalary:{
        type:String,
        required:true
    },
    playerPosition:{
        type:String,
        required:true
    },

}, {timestamps:true})

export const Player = mongoose.model("Player",playerSchema)
