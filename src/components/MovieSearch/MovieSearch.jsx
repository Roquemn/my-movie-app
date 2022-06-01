import React from "react";
const MovieSearch = ({ movieData: { Search } }) => {
  console.log("Search: ", Search);
  return (
    <div>
      {Search.map((movie, index) => {
        return (
          <div key={index}>
            <h2>
              {movie.Title} - {movie.Year}
            </h2>
            <img src={movie.Poster} alt={`${movie.Title} poster.`} />
          </div>
        );
      })}
    </div>
  );
};
export default MovieSearch;