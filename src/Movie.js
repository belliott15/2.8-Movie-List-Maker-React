import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div>
      {movie.title || movie.year || movie.director ? <div className='movie-card' style={{ background: movie.color }} onClick={() => handleDeleteMovie(movie.title)}>
        <h2>{movie.title}</h2>
        <h3>{movie.year}</h3>
        {movie.director ? <h5>Directed by:{movie.director}</h5> : ''}
      </div> : '' }
    </div>
  );
}
