import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    if (this.props.children) {
      return (
        <div className="flex-wrapper">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      );
    } else {
      return (
      <div className="flex-wrapper">
        <Header />
        <article>
          <h3 className='hook'>Hi I'm Sherman. I build things, like this website for example.</h3>
          <section className='blurb'>
            <h3><i className="fa fa-users icon"></i>I'm a Frontend Guy.</h3>
            <p>I write HTML5, CSS3, and JavaScript, I especially enjoy React and am quite the fanboy for Vue. I translate designs into reality, and make sure things look responsive and pretty across different browsers.</p>
          </section>
          <section className='blurb'>
            <h3><i className="fa fa-server icon"></i>I'm a Backend Guy.</h3>
            <p>I write Node with Express, do Websocket stuff, and dabble in Python & Django for web development and APIs. I also muster the courage to perform SQL queries on occasion.</p>
          </section>
          <section className='blurb'>
            <h3><i className="fa fa-check-circle icon"></i>I'm a Testing Guy.</h3>
            <p>After all it's just as important as building the application. Mocha, and Chai aren't just tasty beverages to me. Protractor, Enzyme, and Jest aren't just words I would never use in everyday speech, although I do make use of Karma sometimes.</p>
          </section>
          <section className='blurb'>
            <h3><i className="fa fa-mobile icon"></i>Am I a Mobile Guy?</h3>
            <p>I've worked with React Native and Exponent before, and I'm always game for a challenge. I'm definitely a mobile first design approach guy though.</p>
          </section>
          <section className='blurb'>
            <h3><i className="fa fa-handshake-o icon"></i>Most Importantly...</h3>
            <p>I'm a teamwork and growth-oriented guy, and am always striving to improve myself. Let's get in touch sometime and learn from each other.</p>
          </section>
        </article>
        <Footer />
      </div>
      )
    }
  }
}

export default Home;
