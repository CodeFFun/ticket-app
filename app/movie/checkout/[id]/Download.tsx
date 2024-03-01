"use client"

import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export default function Download(props: any) {

  const pdfRef:any = useRef(null)

  const ticketPrice =
    500 * Number(props.ticket) + (13 / 100) * (500 * Number(props.ticket))

  const downloadPdf = () => {
    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', true)
      pdf.save('download.pdf')
    })
  }
  return (
    <>
      <div className='flex flex-col w-full border-opacity-50 items-center' ref={pdfRef}>
        <div className='grid card bg-base-300 rounded-box place-items-center w-1/2 '>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>{props.name}</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>TicketId</td>
                  <td>{props.id}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>No. of tickets</td>
                  <td>{props.ticket}</td>
                </tr>
                {/* row 3 */}
                <tr>
                <td>Total</td>
                  <td>{ticketPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='divider'></div>
        <div className='grid card bg-base-300 rounded-box place-items-center w-1/2 '>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>{props.name}</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>TicketId</td>
                  <td>{props.id}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>No. of tickets</td>
                  <td>{props.ticket}</td>
                </tr>
                {/* row 3 */}
                <tr>
                <td>Total</td>
                  <td>{ticketPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='divider'></div>
        <div className='grid card bg-base-300 rounded-box place-items-center w-1/2 '>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>{props.name}</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>TicketId</td>
                  <td>{props.id}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>No. of tickets</td>
                  <td>{props.ticket}</td>
                </tr>
                {/* row 3 */}
                <tr>
                <td>Total</td>
                  <td>{ticketPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
