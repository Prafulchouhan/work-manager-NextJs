import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/app/helper/db";

connectDb();

export async function GET(request){
    try {
        const tasks = await Task.find({});
        return NextResponse.json(tasks,{
            status:201
        })
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong !!",
            status: 500
        })
    }
}

export async function POST(request){
    const {title, content, status} = await request.json();

    const authToken = await request.cookies.get('authToken')?.value;
    const data = jwt.verify(authToken,process.env.JWT_KEY);
    const user = await User.findById(data._id).select('-password');

    try {
        const task = Task({
            title: title,
            content: content,
            userId: user._id,
            status: status
        })
        console.log(task)
        const createdTask = await task.save()
        return NextResponse.json(createdTask,
            {
                status: 201
            })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: error.message,
            status: 500
        })
    }
}