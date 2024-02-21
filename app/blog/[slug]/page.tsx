import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const client = createClient({
    projectId: "old3apdr",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });
  const builder=imageUrlBuilder(client)
  export function urlFor(source:any){
      return builder.image(source);
  }
  async function getData(slug:string) {
   
    const query = ` *[_type=="blog" && slug.current=='${slug}']{
        "currentSlug":slug.current,
         title,
         smallDescription,
         releaseDate,
         poster,
         content    
      }[0]`;
    const data = await client.fetch(query);
    return data;
  } 
async function BlogArticle({params}:{params:{slug:string}}) {
    const data=await getData(params.slug);
   
  return (
    <> 
        <span className='block text-base text-center text-[#4C50BC] font-semibold tracking-wide uppercase'>Barshop Studios - Blog</span>
        <section className='mt-8 flex flex-col items-center'>
           
                <span className='mt-2 block text-4xl  leading-8 tracking-tight font-bold text-white'>{data.title}</span>
                <span className='text-[#4C50BC] text-sm mt-4'>{data.releaseDate}</span>
                <Image src={urlFor(data.poster).url()} 
                alt='' 
                width={800} 
                height={800}
                className=' rounded-lg mt-8 border-cyan-500/50 sm:px-10 '
                priority/>

                <div className='text-white w-8/12 mt-16 prose prose-lg'>
                <p>{data.smallDescription}</p>
                <PortableText value={data.content}/>
                </div>
        </section>
    </>
  )
}

export default BlogArticle
