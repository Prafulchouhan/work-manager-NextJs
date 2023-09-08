import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/tasks

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
    const {title, content, userId} = await request.json();

    try {
        const task = Task({
            title: title,
            content: content,
            userId: userId
        })
        const createdTask = await task.save()
        return NextResponse.json(createdTask,
            {
                status: 201
            })
    } catch (error) {

        console.log(error)
        return NextResponse.json({
            message: "something went wrong !!",
            status: 500
        })
        
    }
}