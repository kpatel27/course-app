import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import { Page404 } from './Page404';
import CoursesPage from './CoursesPage';

const App = () => (
  <div className='container-fluid'>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/courses' component={CoursesPage} />
      <Route component={Page404} />
    </Switch>
  </div>
);

export default App;
