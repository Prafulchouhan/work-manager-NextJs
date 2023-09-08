//  api/tasks/{taskId}
import { connectDb } from "@/app/helper/db";
import { responceMessage } from "@/app/helper/responceMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb()


export async function GET(request, {params}){
    const {taskId} = params;
    console.log(taskId)
    try {
        const task = await Task.findById({_id: taskId});
        return NextResponse.json(task,{
            status:201
        })
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong !!",
            status: 500
        })
    }
}

export async function PUT(request, {params}){
    const {taskId} = params;
    const {title, content} = await request.json();
    
    try {
        const updatedTask=await Task.findOneAndUpdate({ _id : taskId},{ title ,content}, {new:true})
        return NextResponse.json(updatedTask,
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

export async function DELETE(request, {params}){
    const {taskId} = params;
    try {
        const task = await Task.deleteOne({_id: taskId});
        return NextResponse.json(task,{
            status:201
        })
    } catch (error) {
        return responceMessage("somethisng went wrong !!  message :- "+`${error.message}`,500,false);
    }
}