import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';

const App = () => (
  <div className='container-fluid'>
    <Nav />
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </div>
);

export default App;
