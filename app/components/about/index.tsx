import Image from 'next/image'
import React from 'react'
import about from '@/public/images/about.jpg'
import { Briefcase ,UsersRound,Speech,Handshake} from 'lucide-react';
function About() {
  return (
    <>
  <section className="py-10 lg:py-20  font-poppins  text-gray-300">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="lg:max-w-md">
                        <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm  uppercase ">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black  text-gray-100 md:text-5xl ">
                                About Us
                            </h1>
                        </div>
                        <p className="px-4 mb-10 text-base leading-7  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                            amet.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6  ">
                                    <span className="text-blue-500 ">
                                      <Briefcase size={40}/>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold  text-gray-100  ">200+
                                    </p>
                                    <h2 className="text-sm  text-gray-400  ">Projects and Plans</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6  ">
                                    <span className="text-blue-500 ">
                                    <Handshake size={40}/>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold  text-gray-100  ">3,000+
                                    </p>
                                    <h2 className="text-sm  text-gray-400 ">Helped people</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6  ">
                                    <span className="text-blue-500 ">
                                      <Speech size={40}/>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold  text-gray-100  ">120+
                                    </p>
                                    <h2 className="text-sm  text-gray-400  ">Volunteer</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6  ">
                                    <span className="text-blue-500 ">
                                    <UsersRound size={40}/>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold  text-gray-100  ">35,000
                                    </p>
                                    <h2 className="text-sm  text-gray-400 ">Audience Reached</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <Image alt='' src={about} height={700}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
