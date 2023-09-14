"use client";
import React, {  useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/app/services/userService';

const UserProvider = ({children}) => {
    const [user,setUser] = useState(undefined);
    useEffect(()=>{
        async function load(){
            try {
                const tempUser = await currentUser();
                setUser({...tempUser});
            } catch (error) {
                setUser(undefined)
            }
        }
        if(!user)
        load();
    },[])
        return (
      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>  
  )
}

export default UserProvider