"use client"

import axios from "axios"
import { useState, useEffect} from "react"
import { useRouter } from "next/navigation"



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

    useEffect(() =>{
        if (typeof window !== 'undefined') {
            const item = localStorage.getItem('key')
         }
        localStorage.getItem('ticket')
    },[])

    const number = localStorage.getItem('ticket')
    const calculate = {
        subtotal:500 * Number(number) ,
        tax: (13/100)*(500 * Number(number)),
        total: (500 * Number(number))+((13/100)*(500 * Number(number))),
    }

    const router = useRouter()

    const pdf = () =>{
        props.setInvoice(false)
    }

    const cancel = () =>{
        router.push(`/movie/${props.id}`)
    }

  return (
    <div className="m-5 p-5 shadow-xl text-white">
        <div className="p-5 m-5 border-b-2 text-2xl">
            <h1>Checkout Summary</h1>
        </div>
        <div className="p-5 m-5 border-b-2">
            <div>
                <h2 className="text-xl text-rose-500">{data.original_title}</h2>
            </div>
            <div className="flex justify-between my-5">
                <p>Movie</p>
                <p>Kathmandu, Nepal</p>
            </div>
        </div>
        <div className="border-b-2 p-5 m-5">
                <div className="flex justify-between my-3">
                        <p>Normal</p>
                        <p>x {number}</p>
                        <p>{500 }</p>
                </div>
                <div className="flex justify-between my-3">
                    <p>Sub-Total</p>
                    <p>{calculate.subtotal}</p>
                </div>
                <div className="flex justify-between my-3">
                    <p>Tax(13%)</p>
                    <p>{calculate.tax}</p>
                </div>
        </div>
        <div className="m-5 border-b-2 p-5">
        <div className="flex justify-between">
                    <p>Total</p>
                    <p>{calculate.total}</p>
        </div>
        </div>
        <div className="flex justify-between">
            <button onClick={cancel} className="btn btn-primary">Cancel</button>
            <button onClick={pdf} className="btn btn-secondary">Confirm and Pay</button>
        </div>
    </div>
  )
}


