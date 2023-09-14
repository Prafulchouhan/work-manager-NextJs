import { NextResponse } from "next/server"
import { User } from "@/models/user";
import { connectDb } from "@/app/helper/db";

connectDb()

export async function GET(request){

    let users = [];
    
    try {
        
       users = await User.find().select("-password");
       console.log(users);
       return NextResponse.json(users);

        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {message: error,
            status: 500}
        )
    }


}

export async function POST(request){
    const {name, email, password, about, profileURL} = await request.json();

    const user = new User({
            name: name,
            email: email,
            password: password,
            about: about,
            profileURL: profileURL
        })
        
    try {
        console.log(user);
        const responce =  NextResponse.json(await user.save(),
        {
            status: 201
        });
        return responce;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message : error?.message || `Something went wrong`,
            status:false
        })
        
    }
}

export function DELETE(){
    return NextResponse.json({
        message: 'Responce for all user'
    })
}