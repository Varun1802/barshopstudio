import React from 'react'
import Blogcard from '../components/blogcard'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import Image from 'next/image';

const client = createClient({
  projectId: "old3apdr",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
const builder=imageUrlBuilder(client)
export function urlFor(source:any){
    return builder.image(source)
}
async function getData() {
  const query = `*[_type=="blog"]{
    name,
    description,
      poster,
      releaseDate
  }`;
  const data = await client.fetch(query);
  return data;
} 
async function Blog() {
  const data=await getData();
  return (
    <>
            <div className='flex flex-col text-white p-8 gap-6 justify-center'>
              <div className=''>
                  <h1 className='text-5xl font-bold'>Latest</h1>
                  <p>A blog created with Next.js and Tailwind.css</p>
              </div>
              
           <hr className='border-b border-gray-800 w-11/12 self-center'/>
              <div>
                  <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start ">
                      {data.map((item: any,idx: number)=>(
                        <div key={idx}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            
                        </div>
                      ) 
                      )}
                  </ul>
              </div>
          </div>

    </>
  )
}
export default Blog
