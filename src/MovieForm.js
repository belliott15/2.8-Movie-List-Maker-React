import React from 'react';

export default function MovieForm({ 
  setMovieTitle,
  movieTitle,
  movieFormYear,
  setMovieFormYear,
  movieFormDirector,
  setMovieFormDirector,
  movieFormColor,
  setMovieFormColor,
  submitMovies
}) {

  return (
    <div>
      <form onSubmit={submitMovies}>
        <h1>Title</h1>
        <input value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} required />
        <h1>Year</h1>
        <input className='number-input' value={movieFormYear} onChange={(e) => setMovieFormYear(e.target.value)} type='Number' min='1900' max='2022'/>
        <h1>Director</h1>
        <input value={movieFormDirector} onChange={(e) => setMovieFormDirector(e.target.value)}/>
        <h1>Background Color</h1>
        <select value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)}>
          <option value='#c04747'>Red</option>
          <option value='#2a9d8f'>Blue</option>
          <option value='#e9c46a'>Yellow</option>
          <option value='#e76f51'>Orange</option>
          <option value='#606c38'>Green</option>
          <option value='#F5F5DC'>Beige</option>
          <option value='#02A4D3'>Cerulean</option>
          <option value='#813f81'>Purple</option>
          <option value='#588157'>Olive</option>
          <option value='#FFE5B4'>Peach</option>
        </select>
        <button>Submit</button> 
      </form>
    </div>
  );
}
