"use client"

import { useState } from "react"

export default function Card({
  imgUrl,
  title,
  date,
  location,
  id
}: {
  imgUrl: string
  title: string
  date: string
  location: string,
  id:string
}) {

  return (
    <>
      <div className='card w-96 h-25 bg-[#13131A] m-5' id={id} >
        <figure className='relative'>
          <img
            src={imgUrl}
            alt='Poster'
          />
          <div className="badge absolute top-3 right-12 badge-neutral p-2">Movie</div>
        </figure>
        <div className='card-body '>
          <h2 className='card-title justify-center'>
            {title}
          </h2>
        </div>
        <div className='card-actions flex justify-between'>
            <div className='badge '>{date}</div>
            <div className='badge '>{location}</div>
          </div>
      </div>
    </>
  )
}


