import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='flex-wrapper'>
      <section className='not-found'>
        <h1 style={{'color':'red'}}>Page Not Found</h1>
        <p>Sorry this page doesn't seem to exist at the moment.</p>
        <p>Would you like to go back <Link className='link' to='/'>home</Link> instead?</p>
      </section>
    </div>
  )
};

export default NotFound;
