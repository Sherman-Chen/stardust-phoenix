import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={Home}>
      <Route path='/about' component={AboutMe} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={Resume} />
      <Route path='/projects' component={Projects} /> 
      <Route path="/*" component={NotFound} />
   </Route>
 </Router>
);

export default Routes;
