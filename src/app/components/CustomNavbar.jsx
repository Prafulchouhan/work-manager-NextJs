"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "../services/userService";
import { toast } from "react-toastify";
import {useRouter} from "next/navigation";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter()
  const doLogout =  async ()=>{
    try {
        const result = await logout();
        context.setUser(undefined);
        router.push('/');
    } catch (error) {
        toast.error(error.message)
    }
  }
  return (
    <div className="bg-blue-600 h-12 py-2 px-24 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-xl font-semibold">
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <ui className="hover:text-blue-200">
                <Link href={"/"}>Home</Link>
              </ui>
              <ui className="hover:text-blue-200">
                <Link href={"/add-task"}>Add Task</Link>
              </ui>
              <ui className="hover:text-blue-200">
                <Link href={"/show-task"}>Show Task</Link>
              </ui>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          {!context.user && (
            <>
            <ui className="hover:text-blue-200">
            <Link href={"/login"}>Login</Link>
          </ui>
          <ui className="hover:text-blue-200">
            <Link href={"/signup"}>Signup</Link>
          </ui>
            </>
          )}
          {context.user && (
          <>
          <ui className="hover:text-blue-200">
            <Link href={"#"}>{context.user.name}</Link>
          </ui>
          <ui className="hover:text-blue-200">
            <button onClick={doLogout}>Logout</button>
          </ui>
          </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomNavbar;
