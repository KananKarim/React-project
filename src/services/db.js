import axios from 'axios';




export const getMovieData = async(name)=>{
    const res = await axios.get(`http://www.omdbapi.com/?s=${name}&apikey=99d929d9`)
        return res.data.Search
}

