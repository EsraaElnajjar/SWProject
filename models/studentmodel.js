import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        requried: true,
    },
    city: {
        type: String,
        requried: false,
    },
},{ timestamps : true});
export default model("omar",studentSchema);