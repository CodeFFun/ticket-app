"use client"

import { useParams } from "next/navigation"
import Params from "./Params"
import Details from "./Details"

function Container() {
    const params = useParams()
    const id = params.id
    return (
      <div className="flex justify-between">
          <Params id={id} />
          <Details id={id} />
      </div>
    )
}

export default Container