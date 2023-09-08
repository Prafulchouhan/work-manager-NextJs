import mongoose from "mongoose"
import { User } from "@/models/user"

export const connectDb = async()=>{
    try{

        const {connection} = await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: 'test'
        })

        console.log("db connected ..")

        //testing to create new user

        // const user = new User({
        //     name: "praful",
        //     email: "test@gmail.com",
        //     password: "1234",
        //     about: "about"
        // })

        // await user.save();


    }catch(error){
        console.log(error)
        console.log('failed to connect with database')
    }
}