import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try {
        const {userId} = params;
        const users = await User.findById({
            "_id": userId
        }).select("-password");
        return NextResponse.json(users);
        
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong !!",
            status: 404
        });
    }
}

export async function DELETE(request, {params}){
    try {
        const {userId} = params;
        await User.deleteOne({
            "_id": userId
        });
        return NextResponse.json({
            message: "User Deleted Successfully !!",
            status: 200
        });
        
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong !!"+`error.message`,
            status: 404
        });
    }
}


export async function PUT(request, {params}){
    
    const {userId} = params;
    const {name, password, about, profileURL} = await request.json();
    
    try {

        const user  = await User.findById(userId);

        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        
        return NextResponse.json(updatedUser,{
            message: "user with _id :-"+`${userId}`+" updated !!",
            status : 200,
        });
        
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong !!"+`${error.message}`,
            status: false
        });
    }
}
