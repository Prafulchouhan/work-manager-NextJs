"use client";

import React from 'react'
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <div className='bg-blue-600 h-12 py-2 px-24 flex justify-between items-center'>
        <div className='brand'>
            <h1 className='text-xl font-semibold'><a href="#">Work Manager</a></h1>
        </div>
        <div>
            <ul className='flex space-x-5'>
                <ui className="hover:text-blue-200">
                    <Link href={'/'}>Home</Link>
                </ui>
                <ui className="hover:text-blue-200">
                    <Link href={'/add-task'}>Add Task</Link>
                </ui>
                <ui className="hover:text-blue-200">
                    <Link href={'/show-task'}>Show Task</Link>
                </ui>
            </ul>
        </div>
        <div>
            <ul className='flex space-x-5'>
                <ui className="hover:text-blue-200">
                    <Link href={'/'}>Login</Link>    
                </ui>
                <ui className="hover:text-blue-200">
                    <Link href={'/'}>Signup</Link>
                </ui>
            </ul>
        </div>
    </div>
  )
}

export default CustomNavbar