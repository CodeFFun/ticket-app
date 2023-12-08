"use client"

import axios from "axios"
import { useState } from "react"

export default function Details(props:any) {
    const [data, setData] = useState({
        original_title:''
    })
    const res = axios
    .get(
      `https://api.themoviedb.org/3/movie/${props.id}?api_key=2d34ac8351a15624422d4e14b38f3374`
    )
    .then((res) => {
      setData(res.data)
    })

    const ticket = localStorage.getItem('ticket')

  return (
    <div className="m-5 p-5 shadow-xl text-white">
        <div className="p-5 m-5 border-b-2 text-2xl">
            <h1>Checkout Summary</h1>
        </div>
        <div className="p-5 m-5 border-b-2">
            <div>
                <h2 className="text-xl">{data.original_title}</h2>
            </div>
            <div className="flex justify-between my-5">
                <p>Movie</p>
                <p>Kathmandu, Nepal</p>
            </div>
        </div>
        <div className="border-b-2 p-5 m-5">
                <div className="flex justify-between my-3">
                        <p>Normal</p>
                        <p>x {ticket}</p>
                        <p>{500 }</p>
                </div>
                <div className="flex justify-between my-3">
                    <p>Sub-Total</p>
                    <p>{500 * Number(ticket)}</p>
                </div>
                <div className="flex justify-between my-3">
                    <p>Tax(13%)</p>
                    <p>{(13/100)*(500 * Number(ticket))}</p>
                </div>
        </div>
        <div className="m-5 border-b-2 p-5">
        <div className="flex justify-between">
                    <p>Total</p>
                    <p>{(500 * Number(ticket))+((13/100)*(500 * Number(ticket)))}</p>
        </div>
        </div>
        <div className="flex justify-between">
            <button className="btn btn-primary">Cancel</button>
            <button className="btn btn-secondary">Confirm and Pay</button>
        </div>
    </div>
  )
}
