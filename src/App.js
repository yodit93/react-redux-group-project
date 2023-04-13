import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import NavLink from './Components/NavLink';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
