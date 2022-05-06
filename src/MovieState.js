import { useState } from 'react';

export default function useMovieState(){
    //Tracking state
  const [allMovies, setAllMovies] = useState([
    { 
      title: '2001: A Space Odyssey',
      year: 1968,
      director: 'Stanley Kubrick',
      color: '#e76f51'
    },
    { 
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Coppola',
      color: '#2a9d8f'
    },
    { 
      title: 'Citizen Kane',
      year: 1941,
      director: 'David Fincher',
      color: '#e9c46a'
    },
    { 
      title: 'Jeanne Dielman ...',
      year: 1975,
      director: 'Chantal Akerman',
      color: '#e76f51'
    },
    { 
      title: 'Raiders of the Lost Ark',
      year: 1981,
      director: 'Steven Spielberg',
      color: '#f4a261'
    },
    
  ]);
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

  //created filter function so search by movie title
  function handleMovieFilter(userInput){
    const searchedMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(userInput.toLowerCase()));

    setFilteredMovies([...searchedMovies]);
  }

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieTitle, setMovieTitle,
    movieFormColor, setMovieFormColor,
    movieFormYear, setMovieFormYear,
    movieFormDirector, setMovieFormDirector,
    query, setQuery,
    submitMovies, handleDeleteMovie,
    handleMovieFilter
  };
}