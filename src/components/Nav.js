import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const activeClass = { color: '#000066' };

  return (
    <nav>
      <NavLink exact to='/' activeStyle={activeClass}>
        Home
      </NavLink>
      {' | '}
      <NavLink to='/about' activeStyle={activeClass}>
        About
      </NavLink>
      {' | '}
      <NavLink exact to='/courses' activeStyle={activeClass}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Nav;
