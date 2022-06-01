import React from "react";
import "./styles.css";

const MovieDetails = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div>
      <h1>{Title}</h1>
      <h2>Year: {Year}</h2>
      <h2>IMDB ID: {imdbID}</h2>
      <img src={Poster} alt={`${Title} poster.`} />
    </div>
  );
};

export default MovieDetails;