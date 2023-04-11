import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Navbar from './Components/Navbar';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
