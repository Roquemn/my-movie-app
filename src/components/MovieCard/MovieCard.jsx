import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./styles.css";

const MovieCard = ({ movieData }) => {
  return (
    <div>
      
      {movieData && (
        Title={movieData.Title}
        Year={movieData.Year}
        imdbID={movieData.imdbId}
        Type={movieData.Type}
        Poster={movieData.Poster}


      )}
        
    </div>
  );
};

export default MovieCard;