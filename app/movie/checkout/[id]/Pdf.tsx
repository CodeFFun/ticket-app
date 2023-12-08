'use client'

import { useState, useRef } from "react"
import axios from "axios"
import Card from "@/components/card/Card"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function (props:any) {
    const number = props.ticket
    const pdfRef = useRef()
    const calculate = {
        subtotal:500 * Number(number) ,
        tax: (13/100)*(500 * Number(number)),
        total: (500 * Number(number))+((13/100)*(500 * Number(number))),
    }
    const [data, setData] = useState({
        original_title:'',
        poster_path: '',
    })
    const res = axios
    .get(
      `https://api.themoviedb.org/3/movie/${props.id}?api_key=2d34ac8351a15624422d4e14b38f3374`
    )
    .then((res) => {
      setData(res.data)
    })
    const onClick = () =>{
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfwidth = pdf.internal.pageSize.getWidth()
            const pdfheight = pdf.internal.pageSize.getHeight()
            const imgwidth = canvas.width
            const imgheight = canvas.height
            const ratio = Math.min(pdfwidth / imgwidth, pdfheight / imgheight)
            const imgx = (pdfwidth - imgwidth * ratio) / 2
            const imgy = 30
            pdf.addImage(imgData, 'PNG', imgx, imgy, imgwidth * ratio, imgheight * ratio)
            pdf.save('invoice.pdf')
        })
    }
  return (
    <>
    <div className='bg-white border-b-2 border-black' ref={pdfRef}>
      <div className='w-full bg-black text-white p-5'>
        <p className='text-2xl'>TicTicketing</p>
      </div>
      <div className='p-5'>
        <p className='text-black text-xl font-bold '>Invoice</p>
        <div className='flex justify-between m-5'>
          <p> Invoice to {props.name}</p>
          <p>InvoiceID: {Math.random()}</p>
        </div>
        <div className='flex justify-between m-5'>
          <p>{props.address}</p>
          <p>order date: {Date()}</p>
        </div>
        <div className='m-5'>
          <p>{props.city}</p>
        </div>
      </div>
      <div>
        <div className='overflow-x-auto'>
          <table className='table m-5'>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Event Details</th>
                <th>Event Type</th>
                <th>Ticket</th>
                <th>Unit Price</th>
                <th>Discount </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>{data.original_title}</td>
                <td>'Movie</td>
                <td>{number}</td>
                <td>{500}</td>
                <td>{0}</td>
                <td>{calculate.total}</td>              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='m-5'>
        <p>Total Invoice: {calculate.total}</p>
      </div>
      {
        <div className="flex justify-around">
            <Card imgUrl ={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} title={data.original_title} date="13 Dec 2023" location="Kathmandu,Nepal" id="" />
            <p>Ticket : {number}</p>
        </div>
      }
    </div>
    <button className="btn btn-primary" onClick={onClick}>Download PDF</button>
    </>

  )
}
