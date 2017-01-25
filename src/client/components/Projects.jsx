import React from 'react';

const Projects = () => {
  return (
    <div className="flex-wrapper">
      <section className='blurb'>
      <h1>Here are some of my past Projects</h1>
      <p className='border-bottom'>I built these both to learn and practice modern Software Engineering and Development. Of course they were also fantastically fun to make!</p>
      </section>
      <section className="blurb border-bottom">
        <h3>CodeOff</h3>
        <p>"Gamified Online Coding Platform"</p>
        <h3><em>Demo Recording currently in progress</em></h3>
        <p>It's on <a href="" className="link">GitHub</a>.</p>
        <p><b>What I built</b>: CodeOff is a web application that allows users to pair up and engage in competitve coding challenges. What set it apart from others was the ability to fire off "power ups" (think Mario-Kart) to distract your opponent and increase your chances of winning!</p>
        <p><b>What I learned</b>: The big thing I learned over the development of CodeOff was the huge impact that properly planning out sprints make, technical debt is a real and scary thing! Technology-wise I learned a lot about React, WebSockets, Continous Integration, and Microservices.</p>
        <p><b>What I am most proud of</b>: It was a challenge to get the websocket connections hookedup so that the players could interact with each other in different capacities, i.e. competitors had access to powerups, while viewers were restricted to viewing only. We also had to figure out how to get competitors code tested, and ultimately we accomplished this by exporting their submissions to a temp file, running Mocha CLI on it, and then importing the results to a containerized testing API which our main server then interacted with.</p>
        <p><b>What I would do better next time</b>: I would have definitely taken more time to plan out the architecture of the application. Also I would have standardized the groups CSS's rules and styleguide more strictly</p>
        <p><em>Built with: React, jQuery, Node, Express, MongoDB, Socket.io, Mocha CLI, Docker, & Webpack.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3>Meal.next</h3>
        <p>"Mobile all-in-one recipe finder"</p>
        <iframe width="100%" height="100%" className='video' src="https://www.youtube.com/embed/tx7B8MA7wyU" frameBorder="0" allowFullScreen></iframe>
        <p>It's on <a href="" className="link">GitHub</a>.</p>
        <p className='align-text-right'><b>What I built</b>:Meal.Next is a mobile app that helps users find and plan out their week's meals.</p>
        <p><b>What I learned</b>: This was my first project where I mainly interacted with legacy code. It was an experience in itself learning how to read and decipher someone else's code, and then planning and adding new features to the already existing product.</p>
        <p><b>What I am most proud of</b>:We were able to completely overhaul the UI and make it more friendly and easy to interact with. We also added several new features to better personalize the app for the user.</p>
        <p><b>What I would do better next time</b>: The initial struggle I had with this project was not being used to another team's coding style and project layout/structure. I would definitey have taken more time to understand the way they architectured their application, instead of just diving into planning new features to add.</p>
        <p><em>Built with: React Native, Exponent, Native Base, Node, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3>Jamz</h3>
        <p>“Mobile accountability checker and activity tracker”</p>
        <iframe width="100%" height="100%" className='video' src="https://www.youtube.com/embed/SgTgcXYEDLY" frameBorder="0" allowFullScreen></iframe>
        <p>It's on <a href="" className="link">GitHub</a>.</p>
        <p><b>What I built</b>: Jamz is a mobile app which allowed user to set and achieve goals, either individually or in a group.</p>
        <p><b>What I learned</b>: This was my first time developing a mobile application and it was quite the adventure learning how to think in terms of developing something for a mobile device (i.e. how users interact with it, how is security different from a web app, etc.). I spent a quite a bit of time learning React Native and the Exponent framework as well.</p>
        <p><b>What I am most proud of</b>:This was my first time working in a group setting, we followed Agile methodology and practices, specifically the SCRUM style, and were able to effectively plan out sprints and execute on them. I was Product Owner for the development cycle and was able to convey and guide the idea into reality.</p>
        <p><b>What I would do better next time</b>: Looking back I would have definitely scaled back on the ideation of the application as we initially set our goals way too high. It was a good experience learning how to manage sprints.</p>
        <p><em>Built with: React Native, Exponent, Node, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3>Tennis Buddy</h3>
        <p>"Social Network for Tennis Ethusiasts"</p>
        <p>It's on <a href="" className="link">GitHub</a>.</p>
        <p><b>What I built</b>: I had 24 hours to complete this project. I built pretty much a static webpage, I was way over my head in wanting to develop an entire social network in only a day!</p>
        <p><b>What I learned</b>: Rapid prototyping is an essential in this industry. If there are scaffolding tools available (ahem Yeoman, Create-React-App, etc. cough cough) you should probably use them to save yourself time!</p>
        <p><b>What I am most proud of</b>: I mean, I survived the 24 hours and got some much needed humbling and experience in software engineering.</p>
        <p className='align-text-right'><b>What I would do better next time</b>: Everything.</p>
        <p><em>Built with: Angular, Node, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb">
        <p>Thanks for checking out some of the stuff I've built! Here's a link to my <a href="https://www.github.com/Sherman-Chen" target='_blank' className="link">GitHub</a> for other projects I've done.</p>
      </section>
    </div>
  )
};

export default Projects;
