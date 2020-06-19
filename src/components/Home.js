import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

const App = () => (
  <div className='App-header'>
    <h1>Course App</h1>
    <p>Welcome to Courses</p>
    <Link to='about' className='btn btn-primary btn-lg'>
      About Page
    </Link>
  </div>
);

export default App;
