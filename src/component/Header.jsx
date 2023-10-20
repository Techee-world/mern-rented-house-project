import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch }from 'react-icons/fa'


function Header() {
  return (
    <div className='bg-slate-300 p-2'>
        <div className='flex max-w-6xl mx-auto justify-between items-center p-3'>
            <div className='font-bold cursor-pointer'>
            <span className='text-slate-500 text-2xl '>RENT</span>
            <span className='text-gray-700'>HOUSE</span>
            </div>
            <div className='flex items-center bg-slate-100 rounded-lg px-5 py-1 '>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none  w-24 sm:w-64 text-gray-600 ' />
<FaSearch className='cursor-pointer' />
            </div>
            <ul className='flex gap-4 '>
                <Link to='/'><li className='hover:underline hidden sm:inline '>Home</li></Link>
                <Link to='/about'><li className='hover:underline hidden sm:inline '>About</li></Link>
                <Link to='/sign-in'><li className='hover:underline  '>signIn</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header