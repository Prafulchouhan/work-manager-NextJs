import { httpAxios } from "../helper/httpHelper";


export async function createUser (user){
    return await httpAxios.post("/api/users",user).then((responce)=> responce.data);
}

export async function login (loginData){
    return await httpAxios.post("/api/login",loginData).then((responce)=> responce.data);
}
 
export async function logout (){
    return await httpAxios.post("/api/logout").then((responce)=> responce.data);
}

export async function currentUser (){
    return await httpAxios.get("/api/current").then((responce)=> responce.data); 
}