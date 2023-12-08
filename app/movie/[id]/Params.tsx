import axios from 'axios'
import { useState } from 'react'
import Card from '@/components/card/Card'

export default function Params(props: any) {
  const [data, setData] = useState({
    id: '',
    original_title: '',
    poster_path: '',
  })
  const res = axios
    .get(
      `https://api.themoviedb.org/3/movie/${props.id}?api_key=2d34ac8351a15624422d4e14b38f3374`
    )
    .then((res) => {
      setData(res.data)
    })
  return (
    <div>
      <Card
        imgUrl={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
        title={data.original_title}
        location='Kathmandu, Nepal'
        date='13 Dec 2023'
        id={data.id}
      />
    </div>
  )
}
