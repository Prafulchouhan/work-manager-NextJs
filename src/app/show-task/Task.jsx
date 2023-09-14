import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import {RxCross2} from 'react-icons/rx'

const Task = ({task, deleteFun}) => {
    const {user} = useContext(UserContext);
    function deleteTask(){
        deleteFun(task._id)
    }
  return (
    <div className={`bg-gray-800 shadow-sm mt-2 rounded`}>
        <div className='p-5'>
            <div className="flex justify-between">
                <h1 className='text-xl font-bold'>{task.title}</h1>
                <button onClick={deleteTask}>
                    <RxCross2 className='text-xl hover:bg-red-500 bg-red-900 rounded'/>
                </button>
            </div>
            <p>{task.content}</p>
            <div className='text-xs flex justify-between'>
                <p className=' text-left'>
                    Status: <span className={`font-bold ${task.status == 'completed'? 'text-green-500': 'text-yellow-500'}`} >{task.status.toUpperCase()}</span>
                </p>
                <p className='text-right'>
                    Author: <span className='font-bold'>{user.name}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Task