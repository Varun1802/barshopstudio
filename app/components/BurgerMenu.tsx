import React from 'react'
import Link from 'next/link'
function BurgerMenu() {
  return (
    <>
    <div className="w-full md:hidden md:w-auto bg-transparent text-white" id="navbar-default ">
      <ul className=" flex flex-col justify-center items-center text-lg ">
        <li className='w-full border-b text-right px-4'>
          <Link href="/" className="  hover:text-cyan-500" aria-current="page">Home</Link>
        </li>
        <li className='w-full border-b text-right px-4'>
          <Link href="/about" className=" hover:text-cyan-500">About</Link>
        </li>
        <li className='w-full border-b text-right px-4'>
          <Link href='/contact' className="  hover:text-cyan-500">Contact</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default BurgerMenu
