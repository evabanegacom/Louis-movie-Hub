import logo from './logo.svg';
import './App.css';
import Search from './search.svg'
import { useState, useEffect } from 'react';
import Movies from './Movies';



function App() {
  // 1794e61a

  const API_KEY = 'http://www.omdbapi.com/?apikey=1794e61a';

  const movie1 = {
    
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  
  }

  const [movies, setMovies] =useState([]);
  const [searcher, setSearcher] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
  }


  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  const handleChange = (e) => {
    setSearcher(e.target.value);

  }

const handleSubmit = (e) => {
  e.preventDefault();
  searchMovies(searcher);
  setSearcher('');
}


  return (
    <div className="App">
      <h1>MovieLand</h1>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a movies" value={searcher} onChange={handleChange}/>
        <img src={Search} alt="search" onClick={handleSubmit} />
      </form>
      <div className="movies">
        <Movies movies={movies} />
      </div>
      
    </div>
  );
}


export default App;
