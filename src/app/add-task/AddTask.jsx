"use client";

import React from "react";
import addtask from "../../assets/add_task.svg" 
import Image from "next/image";
import { useState } from "react";
import { addTask } from "../services/taskService";
import {toast} from 'react-toastify'

const AddTask = () => {
  // document.title = metadata.title;
  const [task, setTask] = useState({
    title:'',
    content:'',
    status:'none'
  })
  const handleAddTask = async (event) =>{
    event.preventDefault();
    try {
      const result = await addTask(task);
      toast.success("Task added successfully !!",{
        position: "top-right"
      })
      setTask({
        title:'',
        content:'',
        status:'none'
      })
    } catch (error) {
      toast.error("Something went wrong !!",{
        position: "top-right"
      })
    }
  }
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5">
        <div className="my-8 flex justify-center">
          <Image src={addtask}
          style={
            {
              width:"30%",
            }
          }/>
        </div>
        <h1 className="text-xl text-center">Add Your Task Here</h1>
        <form action="" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_title"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
              id="task_title"
              name="task_title"
              onChange={(event)=>{
                setTask({
                  ...task,
                  title: event.target.value
                })
              }}
              value={task.title}
            />
          </div>
          {/* task content */}
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_content"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event)=>{
                setTask({
                  ...task,
                  content: event.target.value
                })
              }}
              value={task.content}
            />
          </div>
          <div className="mt-4">
          <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_status"
            >
              Status
            </label>
            <select id="task_status" className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600" 
              name="task_status"
            onChange={(event)=>{
              setTask({
                ...task,
                status: event.target.value
              })
            }}
            value={task.status}
            >
              <option value="none" disabled>--- select status ---</option>
              <option value="pending">Pending</option>
              <option value="completed">Complete</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-800 ">Add Todo</button>
            <button className="px-3 py-2 bg-red-600 hover:bg-red-800 ms-2">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
