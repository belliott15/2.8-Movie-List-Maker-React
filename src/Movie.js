import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div>
      {movie.title || movie.year || movie.director && <div className='movie-card' style={{ background: movie.color, color: 'black' }} onClick={() => handleDeleteMovie(movie.title)}>
        <h2>{movie.title}</h2>
        <h3>{movie.year}</h3>
        {movie.director && <h4>Directed by:{movie.director}</h4>}
      </div> }
    </div>
  );
}
