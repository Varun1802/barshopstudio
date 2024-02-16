import React from 'react'
import { Instagram, Mail,Twitter,Linkedin } from 'lucide-react';

import logo from '@/public/images/image05.png'
import Image from 'next/image'
import Link from 'next/link';

function Footer() {
    return (
        <>
            <footer className="text-white  backdrop-blur-sm">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={logo} alt="..." width={100}/>
                        </Link>
                        <ul className="flex items-center mb-6 text-sm font-medium gap-6">
                            <li>
                                <button><Instagram className=' hover:text-[#fa7e1e]'/></button>
                            </li>
                            <li>
                                <button><Twitter className=' hover:text-cyan-500'/></button>
                            </li>
                            <li>
                               <button><Linkedin className=' hover:text-blue-500'/></button>
                            </li>
                            <li>
                               <button><Mail className=' hover:text-yellow-500'/></button>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-700 sm:mx-auto dark:border-white lg:my-8" />
                    <span className="block text-sm text-white sm:text-center ">© 2024 <Link href="/" className="hover:underline">Barshop Studios™</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
