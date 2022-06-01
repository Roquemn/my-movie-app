/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles.css";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";

const LandingPage = () => {
  const [movie, setMovie] = useState("");
  const [movieName, setMovieName] = useState("");
  const nameInput = React.createRef();
  const idInput = React.createRef();
  const apiKey = "af87555";

  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const getMoviesById = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    console.log(name);
    getMoviesByName(name);
  };

  return (
    <div className="landing-container">
      <h1>Welcome to my movie app!</h1>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          ref={nameInput}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
      <div>
        <MovieCard movieData={movie} />
      </div>
    </div>
  );
};

export default LandingPage;

