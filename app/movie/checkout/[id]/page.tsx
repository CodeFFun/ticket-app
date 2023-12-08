"use client"

import { useParams } from "next/navigation"
import UserInput from "./UserInput"
import Details from "./Details"

export default function page() {
    const params = useParams()
    const id = params.id
  return (
    <div className="flex justify-between p-10 m-5">
        <UserInput />
        <Details id={id}/>
    </div>
  )
}
