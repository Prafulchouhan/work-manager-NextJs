import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/tasks

export async function GET(request, {params}){
    const {userId} = params;
    try {
        const tasks = await Task.find({"userId":userId});
        return NextResponse.json(tasks,{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"something went wrong !!",
            status: 500
        })
    }
}