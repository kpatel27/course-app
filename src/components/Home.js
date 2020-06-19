import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const App = () => (
  <div className='App-header'>
    <h1>Course App</h1>
    <p>Welcome to Courses</p>
    <div>
      <Link to='about' className='btn btn-primary btn-lg mr-3'>
        About Page
      </Link>
      <Link to='courses' className='btn btn-primary btn-lg mr-3'>
        View Courses
      </Link>
    </div>
  </div>
);

export default App;
