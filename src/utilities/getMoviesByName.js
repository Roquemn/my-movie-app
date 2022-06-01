import axios from 'axios';

const apiKey = "af87555"

const getMoviesByName = asyng ( name ) => {
    const url = `http://www.omdbapi.com/?apiKey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    return response.data;
};

export default getMoviesByName;