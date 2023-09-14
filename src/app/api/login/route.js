import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { connectDb } from "./helper/db";

connectDb();

export async function POST(request){

    const {email, password} = await request.json();

    try {

        const user = await User.findOne({
            email:email
        })
        if(user == null){
            throw new Error("user not found !!");
        }
        const matched = bcrypt.compareSync(password, user.password);
        if(!matched){
            throw new Error("Password is not correcrt !!");
        }

        const token = jwt.sign({
            _id: user._id,
            name: user.name
        },process.env.JWT_KEY)

        const responce = NextResponse.json({
            message: "Login Success",
            status: 201,
            user:user
        })

        responce.cookies.set("authToken",token,{
            expiresIn: "1d",
            httpOnly: true
        })

        return responce;

        
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            status: 500
        })
    }
}