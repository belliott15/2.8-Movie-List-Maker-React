import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //Tracking state
  const [allMovies, setAllMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();
  const [movieTitle, setMovieTitle] = useState();
  const [movieFormColor, setMovieFormColor] = useState();
  const [movieFormYear, setMovieFormYear] = useState();
  const [movieFormDirector, setMovieFormDirector] = useState();
  
  //create delete function to delete movies on click
  function handleDeleteMovie(){

  }
  // use Effect to only activate when state changes
  // useEffect();
  //created filter function so search by movie title
  function handleMovieFilter(){

  }
  
  return (
    <div className="App">
      <header className="App-header">
        Movie Maker
      </header>
      <main>
        <form>
          <h1>Title</h1>
          <input />
          <h1>Year</h1>
          <input />
          <h1>Director</h1>
          <input />
          <h1>Background Color</h1>
          <select>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
            <option value='crimson'>Red</option>
          </select>
          <button>Submit</button>
        </form>
        <h2>Title</h2>
        <h3>year</h3>
        <h5>Directed By:</h5>
        
        <h2>Title</h2>
        <h3>year</h3>
        <h5>Directed By:</h5>
      </main>
    </div>
  );
}

export default App;
