import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    about:String,
    profileURL: String,
    // address:{
    //     street: String,
    //     city: String,
    //     country: String,
    //     pinCode: Number
    // }
});

export const User = mongoose.models.users || mongoose.model("users",userSchema);