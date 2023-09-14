import { connectDb } from "@/app/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function POST(request){
    const responce = NextResponse.json({
        message: "Logged out!!",
        status:201
    })
    responce.cookies.set('authToken','',{
        expires: new Date(0)
    })

    return responce;
}