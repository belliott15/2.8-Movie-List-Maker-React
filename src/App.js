import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import './App.css';

function App() {

  //Tracking state
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('#2a9d8f');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [query, setQuery] = useState('');
  

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
    setMovieFormColor('#2a9d8f');
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
  useEffect(() => handleMovieFilter(query), [query, allMovies]);
  //created filter function so search by movie title
  function handleMovieFilter(userInput){
    const searchedMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(userInput.toLowerCase()));

    setFilteredMovies([...searchedMovies]);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Movie Maker
      </header>
      <main>
        <div className='top-half'>
          <MovieForm 
            movieTitle={movieTitle}
            setMovieTitle={setMovieTitle}
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
          <div>
            <MovieList allMovies={query ? [...filteredMovies] : [...allMovies]} handleDeleteMovie={() => handleDeleteMovie()}/>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
