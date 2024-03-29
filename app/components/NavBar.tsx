'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/images/image05.png'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

function NavBar() {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <>
      <nav className="text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt='' className='w-20 md:w-32' />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setShowBurger(!showBurger) }}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto bg-transparent text-white" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:border-0  ">
              <li>
                <Link href="/" className=" py-2 px-3 text-white  rounded   hover:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/about" className=" py-2 px-3  rounded 0  md:p-0 hover:text-blue-500">About</Link>
              </li>
              <li>
                <Link href='/blog' className=" py-2 px-3  rounded md:p-0  hover:text-blue-500">Blogs</Link>
              </li>
              <li>
                <Link href='/contact' className=" py-2 px-3  rounded md:p-0  hover:text-blue-500">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showBurger && <BurgerMenu />}
    </>
  )
}

export default NavBar