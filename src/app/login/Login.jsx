"use client";
import React, { useContext, useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { login } from "../services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
  const context = useContext(UserContext);
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const doLogin = async (event) =>{
    event.preventDefault();
    try {
      const result = await login(loginData);
      context.setUser(result.user);
      router.push('/profile/user')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="my-2 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
          />
        </div>
        <div className="py-5">
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="#" onSubmit={doLogin}>
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
                id="email"
                name="email"
                onChange={(event)=>{
                  setLoginData({
                    ...loginData,
                    email: event.target.value
                  })
                }}
                value={loginData.email}
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
                id="password"
                name="password"
                onChange={(event)=>{
                  setLoginData({
                    ...loginData,
                    password: event.target.value
                  })
                }}
                value={loginData.password}
              />
            </div>
            <div className="mt-4 flex justify-center">
            <button type="submit" className="px-3 py-2 bg-blue-600 hover:bg-blue-800 ">Login</button>
            <button type="button"  className="px-3 py-2 bg-red-600 hover:bg-red-800 ms-2">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
