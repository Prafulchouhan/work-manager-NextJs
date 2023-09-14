import mongoose from "mongoose"
import { User } from "@/models/user"

const config = {
    isConnected: 0
}

export const connectDb = async()=>{
    if(config.isConnected){
        return
    }
    try{

        const {connection} = await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: 'test'
        })
        config.isConnected = connection.readyState;


    }catch(error){
        console.log(error)
        console.log('failed to connect with database')
    }
}