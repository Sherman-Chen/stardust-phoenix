import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  const active = {'fontWeight':'bold'};

  return (
    <div className='header-flex-container'>
      <div className='brand-aside'>
        <Link className='brand' to='/'><p>Sherman Chen</p></Link>
      </div>
      <div className='links-aside'>
        <Link className='link link-nav' to='/resume' activeStyle={active}><p>Resume</p></Link>
        <Link className='link link-nav' to='/projects' activeStyle={active}><p>Projects</p></Link>
        <Link className='link link-nav' to='/about' activeStyle={active}><p>About Me</p></Link>
        <Link className='link link-nav' to='/contact' activeStyle={active}><p>Contact</p></Link>
      </div>
    </div>
  )
};

export default Header;
