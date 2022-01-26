import React from 'react';
import Navbar from './app/Components/Navbar';
import './App.css'
import Home from './app/Components/Home';
import GetUsers from './app/Components/GetUsers';

const App = () => {
  return <div>
    <Navbar />
    {/* <Home /> */}
    <GetUsers />
  </div>;
};

export default App;
