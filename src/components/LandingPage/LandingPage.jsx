/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles.css";
import movieData from "../../movieData";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";

const LandingPage = () => {
  const [movie, setMovie] = useState("");
  const [movieName, setMovieName] = useState("");
  const apiKey = "bb5872cb";

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
    getMoviesByName(movieName);
  };

  return (
    <div>
      <h1>Welcome to my movie app!</h1>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
      <div>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default LandingPage;

