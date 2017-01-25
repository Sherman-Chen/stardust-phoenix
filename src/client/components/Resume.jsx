import React from 'react';
import { Link } from 'react-router';

const Resume = () => {
  return (
    <div className='flex-wrapper'>
      <section className='blurb'>
        <h1>I'm actively job searching at the moment!</h1>
          <ul>
            <li>I'm looking for work as a Software Engineer.</li>
            <li>I bring an expertise in JavaScript and Full Stack Web Development.</li>
            <li>I'm a keen believer in teamwork, clear communication, and learning new things!</li>
            <li>I always bring an earnest and relentless attitude when it comes to building and engineering.</li>
            <li>Let's get in <Link className='link' to="/Contact">touch</Link> if I sound like someone you might want to work with!</li>
          </ul>
      </section>
      <section className="blurb">
        <h3>Previous Experience</h3>
        <p>From 2014 - 2015: <b>General Manager</b> @ <a className='link' href="http://www.indigi-usa.com/" target='_blank'>Indigi</a></p>
        <ul>
          <li>Managed multiple digital storefronts including Amazon, Jet, Walmart, Newegg, Rakuten, and others.</li>
          <li>Supervised small team in Customer Service, Order Invoicing, Merchandise Fulfillment, and Inventory.</li>
          <li>Managed $2 Million in product and growth.</li>
          <li>Created and maintained company e-commerce store site using Volusion.</li>
        </ul>
      </section>
      <section className="blurb">
        <h3>Skills</h3>
        <ul>
          <li><b>Frontend</b>: In past projects I have used React, and Angular. I have some experience with jQuery and Backbone as well. Really excited about Vue for some reason. I make a committment to building responsive mobile first designs.</li>
          <li><b>Backend</b>: For the server side of things I program mostly in Node with the Express framework, and use Websockets on occasion. Currently exploring the Django framework.</li>
          <li><b>Databases</b>: I'm a nice guy, but I'm also a MEA/RN guy so MongoDB is my go to. I have also utilized MySQL, MariaDB, and SQLite before.</li>
          <li><b>Version Control</b>: Git saves lives! Always make frequent commmits!</li>
          <li><b>Build</b>: Webpack and NPM scripts are cool, have also used Grunt, Gulp, and Bower.</li>
          <li><b>Deployment</b>: I'm not the most skilled at DevOps, but I'm constantly improving. Previous applications were deployed using Heroku, and Digital Ocean. Docker is pretty neat.</li>
          <li><b>Languages</b>: JavaScript, HTML, CSS, Python, Ruby, and some Go. I can speak English, and Chinese and am always looking to pick up new languages programming and conversational!</li>
          <li><b>Others</b>: I also have experience with design tools like Sketch and PhotoShop, and write tests using Mocha, Chai, Jasmine, Karma, and so forth. Have used Continous Integration tools such as CircleCi and TravisCi.</li>
        </ul>
      </section>
      <section className='blurb'>
        <h3>Education</h3>
        <ul className='align-text-right'>
          <li>BA Sociology: University of California, San Diego</li>
          <li>Hack Reactor SF, Cohort 48</li>
        </ul>
      </section>
      <section style={{'textAlign':'center'}}>
        <p>If you've gotten this far here's a PDF of my more traditional looking <a className='link' href='https://docs.google.com/document/d/1W-xE3EflmMx3x4Kg9_Hm6VwOodGc4UMQ16xH9RBz3to/edit?usp=sharing' target='_blank'>Resume</a>.</p>
        <p>Connect with me on <a className='link' href='https://www.linkedin.com/in/shermanchen410' target='_blank'>LinkedIn</a>!</p>
      </section>
    </div>
  )
};

export default Resume;
