import React from 'react';
import { Link } from 'react-router';

export default class AboutMe extends React.Component {
  render() {
    return(
      <div className='flex-wrapper'>
        <section className="blurb">
          <h1>About Sherman</h1>
          <figure className="card">
            <img src="http://res.cloudinary.com/meetshermanchen-com/image/upload/v1486015925/sherman_chen_n42kso.jpg" alt="The boyhood dream acheived! Finally WWE Champion of the world!"/>
            <figcaption><em>Who knows? Maybe one day it'll be the actual belt. A man can dream! ;D</em></figcaption>
          </figure>
          <p><i className="fa fa-hand-peace-o icon"></i>When not developing I can usually be found exercising, playing tennis, binging netflix, or planning out my next personal project!</p>
          <p><i className="fa fa-university icon"></i>I'm dedicated to being a growth-oriented person and always learning new things. Something I've been learning recently is the Python web framework Django. Something I've been listening to recently is the awesome podcast <a className="link" href="http://frontendhappyhour.com/" target="_blank">Front End Happy Hour</a>.</p>
          <p><i className="fa fa-book icon"></i>I am a huge advocate for education reform and accessibility, having studied education, critical gender studies, and ethnic studies extensively at UCSD, and also volunteering time at local alternative education schools dedicated to serving disadvantaged and underrepresented youth.</p>
          <p><i className="fa fa-coffee icon"></i>I'm always excited with meeting new people and learning from them, let's get in <Link className='link' to='/contact'>touch</Link> sometime over coffee or a meal!</p>
        </section>
      </div>
    )
  }
}
