import React from 'react'
import Link from 'next/link'
function BurgerMenu() {
  return (
    <>
    <div className="w-full md:hidden md:w-auto bg-transparent text-white pb-10" id="navbar-default ">
      <ul className=" flex flex-col justify-center items-center text-lg ">
        <li className='w-full  text-right px-4 '>
          <Link href="/" className="  hover:text-cyan-500" aria-current="page">Home</Link>
          <hr className='border-b border-gray-800'/>
        </li>
        <li className='w-full  text-right px-4 '>
          <Link href="/about" className=" hover:text-cyan-500">About</Link>
          <hr className='border-b border-gray-800'/>
        </li>
        <li className='w-full  text-right px-4 '>
          <Link href='/blog' className="  hover:text-cyan-500">Blogs</Link>
          <hr className='border-b border-gray-800'/>
        </li>
        <li className='w-full  text-right px-4 '>
          <Link href='/contact' className="  hover:text-cyan-500">Contact</Link>
          <hr className='border-b border-gray-800'/>
        </li>
      </ul>
    </div>
    </>
  )
}

export default BurgerMenu
