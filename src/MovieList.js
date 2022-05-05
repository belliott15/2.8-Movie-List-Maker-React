import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  return (
    <div>
      {allMovies.map((movie, i) => <Movie key={movie.year + i} movie={movie} handleDeleteMovie={handleDeleteMovie}/>)}
    </div>
  );
}
