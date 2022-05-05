import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import './App.css';

function App() {

  //Tracking state
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState();
  const [movieTitle, setMovieTitle] = useState();
  const [movieFormColor, setMovieFormColor] = useState();
  const [movieFormYear, setMovieFormYear] = useState();
  const [movieFormDirector, setMovieFormDirector] = useState();
  const [query, setQuery] = useState();
  

  //submit function to push new movies to allMovies
  function submitMovies(e){
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      year: movieFormYear,
      director: movieFormDirector,
      color: movieFormColor
    };

    setAllMovies([...allMovies, newMovie]);
    //clear all inputs
    setMovieTitle('');
    setMovieFormColor('');
    setMovieFormYear('');
    setMovieFormDirector('');
  }
  //create delete function to delete movies on click
  function handleDeleteMovie(title){
    const movieIndex = allMovies.findIndex((movie) => movie.title === title);
    //splice to pull specific item out then reset array
    allMovies.splice(movieIndex, 1);

    setAllMovies([...allMovies]);
  }
  // use Effect to only activate when state changes
  // useEffect(handleMovieFilter(query), [query, allMovies]);
  //created filter function so search by movie title
  function handleMovieFilter(userInput){
    allMovies.filter((movie) => movie.title.toLowerCase().includes(userInput.toLowerCase));
    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Movie Maker
      </header>
      <main>
        <div className='top-half'>
          <MovieForm 
            setMovieTitle={setMovieTitle}
            movieTitle={movieTitle}
            movieFormYear={movieFormYear}
            setMovieFormYear={setMovieFormYear}
            movieFormDirector={movieFormDirector}
            setMovieFormDirector={setMovieFormDirector}
            movieFormColor={movieFormColor}
            setMovieFormColor={setMovieFormColor}
            submitMovies={(e) => submitMovies(e)}
          />
          <Movie movie={{
            title: movieTitle,
            year: movieFormYear,
            director: movieFormDirector,
            color: movieFormColor
          }} handleDeleteMovie={() => handleDeleteMovie()}/>
        </div>
        <section className='bottom-half'>
          Search <input value={query} onChange={(e) => setQuery(e.target.value)}/>
          <div className='movie-list'>
            <MovieList allMovies={allMovies} handleDeleteMovie={() => handleDeleteMovie()}/>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
