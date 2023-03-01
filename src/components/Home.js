import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import './index.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/93283219ac06a89cfbee/movies/')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-component">
      <Header />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            category={movie.category}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
