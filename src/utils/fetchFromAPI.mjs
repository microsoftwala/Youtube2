import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params:{
    part: 'snippet,id',
    maxResults: '51',
  },
  headers: {
    'X-RapidAPI-Key': 'e26c9b0423msh83a6c238b6cd32dp176dbajsn4029cfcdeb98',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data)
    return data;
}


// fetchFromAPI("search?part=snippet,id&q=music");