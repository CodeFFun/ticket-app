"use state"

import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Details(props:any) {
  const [ticket, setTicket] = useState(1)
  const ticketPrice  = ticket * 500
  const router = useRouter()

  const increase = () => {
    setTicket(ticket + 1)
  }

  const decrease = () =>{
    setTicket(ticket - 1)
  }

  const onClick = () =>{
    localStorage.setItem('ticket', JSON.stringify(ticket))
    router.push(`checkout/${props.id}`)
  }
  return (
    <>
        <div className='px-7 m-4 text-white shadow-xl'>
            <div className="border-b-2 m-5 p-5">
              <h1 className="text-3xl">Event Details</h1>
            </div>
            <div className="flex p-4 m-3 justify-between border-b-2 text-2xl">
              <div>
                  <SlCalender className='text-5xl' />
              </div>
              <div className="flex flex-col mx-2 items-center ">
                <p>Date</p>
                <p>Tuesday,13 Dec, 2023</p>
              </div>
            </div>
            <div className="flex p-4 m-3 justify-between border-b-2">
              <div>
                <IoLocationSharp className='text-7xl'/>
              </div>
              <div className="flex flex-col mx-2 items-center">
                <p className="m-2">Location</p>
                <p className="m-2">Kathmandu,Nepal</p>
                <p className="m-2">View on Map</p>
              </div>
            </div>
            <div>
              <p className="text-3xl m-3">Select Tickets</p>
              <div className="flex justify-between p-3">
                <div className="mb-5 text-2xl">
                <p className="text-slate-500 mb-3">1x Ticket</p>
                <p>500Rs</p>
                </div>
                <div>
                  <button disabled={ticket<= 1 }  onClick={decrease} className="m-2 p-2 btn btn-secondary" > - </button>
                  {ticket}
                  <button disabled={ticket >= 10} onClick={increase} className="p-2 m-2 btn btn-secondary"> + </button>
                </div>
              </div>
              <button  onClick={onClick} className="btn btn-secondary w-full">Checkout: <span>{ticketPrice}</span></button>
            </div>
        </div>
    </>
  )
}
