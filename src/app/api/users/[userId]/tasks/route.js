import { connectDb } from "@/app/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/tasks

connectDb()

export async function GET(request, {params}){
    const {userId} = params;
    try {
        const tasks = await Task.find({"userId":userId});
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"something went wrong !!",
            status: 500
        })
    }
}