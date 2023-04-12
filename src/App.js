/* eslint-disable */
/* stylelint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  // Component rendering
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
