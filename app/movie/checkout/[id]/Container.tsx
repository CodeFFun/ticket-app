"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Details from "./Details"
import Download from "./Download"
 



export default function Container() {

    const params = useParams()
    const id = params.id
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        address:'',
        country:'',
        state: '',
        postal:'',
        city:''
    })

    const [invoice, setInvoice] = useState(true)

    useEffect(() =>{
        if(typeof window !== 'undefined'){
            const item = localStorage.setItem('', '')
        }
    },[])

    const ticket = localStorage.getItem('ticket')

    const onChange = (e:any) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
         })
    }
    
    {
        return (invoice ? (
            <div className="flex justify-between p-10 m-5">
            <form className='p-5 w-[600px] text-white text-xl'>
            <div className='relative z-0 w-full mb-10 group '>
              <input
                type='text'
                name='name'
                id='name'
                className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                required
                onChange={onChange}
                value={formData.name}
              />
              <label
                htmlFor='name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Name
              </label>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full group mb-10'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.email}
                  required
                />
                <label
                  htmlFor='email'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email
                </label>
              </div>
              <div className='relative z-0 w-full mb-10 group'>
                <input
                  type='text'
                  name='address'
                  id='address'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.address}
                  required
                />
                <label
                  htmlFor='address'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Address
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-10 group'>
                <input
                  type='text'
                  name='country'
                  id='country'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.country}
                  required
                />
                <label
                  htmlFor='country'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Country
                </label>
              </div>
              <div className='relative z-0 w-full mb-10 group'>
                <input
                  type='text'
                  name='state'
                  id='state'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.state}
                  required
                />
                <label
                  htmlFor='state'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  State
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-10 group'>
                <input
                  type='text'
                  name='postal'
                  id='postal'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.postal}
                  required
                />
                <label
                  htmlFor='postal'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Postal/Zip
                </label>
              </div>
              <div className='relative z-0 w-full mb-10 group'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={onChange}
                  value={formData.city}
                  required
                />
                <label
                  htmlFor='city'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  City
                </label>
              </div>
            </div>
          </form>
            <Details id={id} invoice={invoice} setInvoice={setInvoice}/>
        </div>
        ): (
            // <Pdf name={formData.name} address={formData.address} city={formData.city} ticket={ticket} id={params.id}/>
            <Download name={formData.name} ticket={ticket} id={params.id}/>
            
        ))
    }
}
