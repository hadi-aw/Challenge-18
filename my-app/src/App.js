// U51313007
// src/App.js

import React from 'react';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';
import `./App.css`;

const movies = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Interstellar' },
    { id: 3, title: 'The Dark Knight' },
];

const App = () => {
    return (
      <div className="toolbar">
      <h1>Interactive Media Toolbar</h1>
      <MovieSelector movies={movies} />
      <UploadButton />
      </div>
    );
};

export default App;