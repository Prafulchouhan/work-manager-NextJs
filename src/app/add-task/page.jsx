import React from "react";
import addtask from "../../assets/add_task.svg" 
import Image from "next/image";

export const metadata = {
  title: "Add Task : Work Manager",
};
const AddTask = () => {
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4">
        <div className="my-8 flex justify-center">
          <Image src={addtask}
          style={
            {
              width:"40%",
            }
          }/>
        </div>
        <h1 className="text-xl text-center">Add Your Task Here</h1>
        <form action="">
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
            />
          </div>
          <div className="mt-4">
          <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_status"
            >
              Status
            </label>
            <select name="" id="task_status" className="w-full p-3 rounded-2xl bg-gray-800 focus:bg-gray-600" >
              <option value="none" selected disabled>--- select status ---</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
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
