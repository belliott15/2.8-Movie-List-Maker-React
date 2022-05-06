import { useEffect } from 'react';
import Header from './Header';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import useMovieState from './MovieState';
import './App.css';

function App() {

  const {
    allMovies, filteredMovies,
    movieTitle, setMovieTitle,
    movieFormColor, setMovieFormColor,
    movieFormYear, setMovieFormYear,
    movieFormDirector, setMovieFormDirector,
    query, setQuery,
    submitMovies, handleDeleteMovie,
    handleMovieFilter
  } = useMovieState();

  // use Effect to only activate when state changes
  useEffect(() => handleMovieFilter(query), [query, allMovies]); //eslint-disable-line
  
  return (
    <div className="App">
      <Header text={'Movie Maker'}/>
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
