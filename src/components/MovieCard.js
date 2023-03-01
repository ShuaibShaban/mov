import React from 'react';
import './index.css';

function MovieCard({ title, description, category, image }) {
  
  return (
    <div className="movie-card">
      <img className="movie-image" src={image} alt={title} />
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{description}</p>
        <p className="movie-category">{category}</p>
      </div>
    </div>
  );
}

export default MovieCard;
