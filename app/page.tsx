import Link from 'next/link'
import getMultipleMovieData from './_lib/getMultipleMovieData'
import Card from '@/components/card/Card'

export default async function () {
  const { movieData } = await getMultipleMovieData()

  return (
    <div className='mx-5 text-white flex flex-wrap justify-between'>
      {movieData.results.map((item) => (
        <Link href={`movie/${item.id}`} key={item.id} id={item.id}>
          <Card
            imgUrl={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`}
            title={item.original_title}
            location='Kathmandu, Nepal'
            date='13 Dec 2023'
            id={item.id}
          />
        </Link>
      ))}
    </div>
  )
}
