import React from 'react';
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/getusers'>Get Users</Link></li>
    </ul>
  </nav>
};

export default Navbar;
