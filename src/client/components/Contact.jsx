import React from 'react';

const Contact = () => {
  return (
    <div className='flex-wrapper'>
      <section className='stretcher'>
        <h1>Let's get in touch!</h1>
        <h2>Email</h2>
        <a className='link' href="mailto:shc410@gmail.com">shc410@gmail.com</a>
        <h2>Phone</h2>
        <a className='link' href="tel:4156234670">415 623 4670</a>
        <h2>Some other stuff to look at</h2>
        <p>Check out my <a className='link' href="https://www.linkedin.com/in/shermanchen410" target="_blank">LinkedIn</a>.</p>
        <p>Check out my <a className='link' href='https://www.github.com/Sherman-Chen' target='_blank'>GitHub</a>.</p>
      </section>
    </div>
  )
};

export default Contact;
