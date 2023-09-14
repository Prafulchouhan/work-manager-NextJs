"use client";
import React from "react";
import { useState } from "react";
import signup from "../../assets/signup.svg"
import Image from "next/image";
import { createUser } from "../services/userService";
import bcrypt from "bcryptjs";

const Signup = () => {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    about:'',
    profileURL:'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg'
  })

  const doSignup = async (event) =>{
    event.preventDefault();
    user.password = await bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT))
    console.log(user.password)
    try {
      const result  = await createUser(user);
      setUser({
        name:'',
        email:'',
        password:'',
        about:'',
        profileURL:'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg'
      })
    } catch (error) {
      console.log(error);
    }
  }

  const reset = () =>{
    setUser({
      name:'',
      email:'',
      password:'',
      about:'',
      profileURL:'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg'
    })
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
      <div className="my-2 flex justify-center">
          <Image src={signup}
          style={
            {
              width:"50%",
            }
          }/>
        </div>
        <div className="py-5">
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="#" onSubmit={doSignup}>
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
                placeholder="Enter here"
                id="user_name"
                name="user_name"
                value={user.name}
                onChange={(event)=>{
                  setUser({
                    ...user,
                    name: event.target.value
                  })
                }}
              />
            </div>
            {/* Email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
                placeholder="Enter here"
                id="user_email"
                name="user_email"
                value={user.email}
                onChange={(event)=>{
                  setUser({
                    ...user,
                    email: event.target.value
                  })
                }}
              />
            </div>
            {/* password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
                placeholder="Enter here"
                id="user_password"
                name="user_password"
                value={user.password}
                onChange={(event)=>{
                  setUser({
                    ...user,
                    password: event.target.value
                  })
                }}
              />
            </div>
            {/* About */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2"
              >
                About
              </label>
              <textarea
                className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
                placeholder="Enter here"
                id="user_about"
                name="user_about"
                value={user.about}
                onChange={(event)=>{
                  setUser({
                    ...user,
                    about: event.target.value
                  })
                }}
                rows={5}
              />
            </div>
            <div className="mt-4 flex justify-center">
            <button type="submit" className="px-3 py-2 bg-blue-600 hover:bg-blue-800 ">Signup</button>
            <button type="button" onClick={reset} className="px-3 py-2 bg-red-600 hover:bg-red-800 ms-2">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
