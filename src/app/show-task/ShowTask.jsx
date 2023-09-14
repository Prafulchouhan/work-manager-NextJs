"use client"
import React, { useContext, useEffect, useState } from 'react'
import { getTasksById } from '../services/taskService'
import { currentUser } from '../services/userService'
import UserContext from '@/context/userContext'
import Task from './Task'
import { deleteTasksById } from '../services/taskService';
import { toast } from 'react-toastify';

const Showtask = () => {
    const context = useContext(UserContext);
    const [tasks, setTasks] = useState([])

    const deleteFun = async (taskId) => {
        try {
            await deleteTasksById(taskId);
            const newTasks = tasks.filter((task)=> task._id != taskId)
            setTasks([...newTasks]); 
            toast.success("Task deleted successfully !!")
        } catch (error) {
            toast.error("something went wrong !!")
        }
    }

    useEffect(()=>{
        if(context.user){
            const userId = context.user._id;
            async function load(){
                const data = await getTasksById(userId);
                setTasks([...data]);
            }
            load();
        }
    },[context.user])
  return (
    <div className='grid grid-cols-12 mt-3 '>
        <div className='col-span-6 col-start-4 '>
            <h1 className='text-3xl text-center mb-3'> Your tasks ({tasks.length})</h1>
            {tasks.map((task)=>(
                <Task task={task}  key={task._id} deleteFun={deleteFun}/>
            ))}
        </div>
    </div>
  )
}

export default Showtask