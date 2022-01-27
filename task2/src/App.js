import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './app/Components/Navbar';
import './App.css'
import Home from './app/Components/Home';
import GetUsers from './app/Components/GetUsers';

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getusers' element={<GetUsers />} />
    </Routes>
  </BrowserRouter>
};

export default App;
