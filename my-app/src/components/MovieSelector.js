// U51313007
// src/components/MovieSelector.js
import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';

const MovieSelector = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    const handleChange = (event) => {
        const selected = movies.find(movie => movie.id === event.target.value);
        setSelectedMovie(selected);
    };

    return (
        <div>
            <select onChange={handleChange} value={selectedMovie.id}>
                {movies.map(movie => (
                    <option key={movie.id} value={movie.id}>
                        {movie.title}
                    </option>
                ))}
            </select>
            <div>
                <h2>{selectedMovie.title}</h2>
                <RateMovieButton movieId={selectedMovie.id} />
        </div>
        </div>
    );
}

export default MovieSelector;
