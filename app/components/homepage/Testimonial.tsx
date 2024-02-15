import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

function Testimonial(props: { image: string | StaticImport; name: string; position: string ; exp: string}){
  return (
    <> 
        <div className='flex flex-col justify-center items-center bg-gray-900 rounded-xl py-8 shadow-sm shadow-cyan-500/50'>
          <Image src={props.image} alt='' width={100} className='rounded-full '/>
          <p className='text-2xl mt-2'>{props.name}</p>
          <p className=' text-[12px]'> {props.position}</p>
          <p className='text-center m-4'>{props.exp}</p>
        </div> 
    </>
  )
}

export default Testimonial
