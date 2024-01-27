import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    filepath:{
        type:String,
        required:true
    },
    downloadcount:{
        type:Number,
        required:true,
        default:0
    }
});

const File = mongoose.model('file',fileSchema);

export default File;