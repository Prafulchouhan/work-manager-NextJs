import { NextResponse } from "next/server"

export const responceMessage =(message, statusCode, successStatus)=>{

    return NextResponse.json({
        message:message,
        success: successStatus,
        status :statusCode
    })

}