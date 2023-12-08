import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/upcoming?api_key=2d34ac8351a15624422d4e14b38f3374'
})

export default api