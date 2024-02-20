import React from 'react'
import Blogcard from './blogcard'
import { createClient } from "next-sanity";

function Blog() {
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
                      <Blogcard/>
                      <Blogcard/>
                      <Blogcard/>
                  </ul>
              </div>
          </div>

    </>
  )
}
export default Blog

const client = createClient({
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets
    }
  };
}