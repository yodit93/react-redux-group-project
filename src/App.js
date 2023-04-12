/* eslint-disable */
/* stylelint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing styles
import './App.css';

function App() {
  // Component rendering
  return (
    <>
      {/* Navbar component */}
      <Nav-bar />

      {/* Setting up routing using react-router-dom */}
      <Routes>
        {/* Setting up routes for each page */}
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
