import api from "./api";


interface multiplemovieData{
    results:[{
        original_title:string,
        backdrop_path:string
        id:string
    }]
}

export default async function(){
    const res = await api.get<multiplemovieData>('')
    const data = await res.data
    return({
        movieData:data
    })
}

