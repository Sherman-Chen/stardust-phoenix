import React from 'react';
import { Link } from 'react-router';

export default class AboutMe extends React.Component {
  render() {
    return(
      <div className='flex-wrapper'>
        <section className="blurb stretcher">
          <h1>About Sherman</h1>
          <p>When not developing I can be found playing tennis, binging netflix, or planning out my next personal project!</p>
          <p>I am a huge advocate for education reform and accessibility, having spent time in college volunteering at primary and secondary education schools dedicated to serving underrepresented students.</p>
          <p>I'm always keen with meeting new people and learning from them, let's get in <Link className='link' to='/contact'>touch</Link> sometime for coffee or a meal!</p>
        </section>
      </div>
    )
  }
}
