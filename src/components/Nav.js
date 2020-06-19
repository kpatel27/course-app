import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link exact to='/'>
      Home
    </Link>
  </nav>
);

export default Nav;
