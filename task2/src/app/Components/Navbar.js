import React from 'react';
import '../Styles/Navbar.css'

const Navbar = () => {
  return <nav>
      <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/getusers'>Get Users</a></li>
      </ul>
  </nav>
};

export default Navbar;
