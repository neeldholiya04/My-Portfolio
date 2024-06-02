import React from 'react';
import './About.css'; 
import Skills from './Skills';

function About() {

    return (
        <>
        <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Neel Dholiya</b> and I am from Gujarat, India.
            I'm a <b>MERN stack web developer</b> and a first year college student pursuing <b>BSc in CSE</b>. <br/><br/>
            I am working on the project called <b>SPOT MICRO</b> a mini version of Boston Dynamics famous robot dog SPOT.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.linkedin.com/in/neel-dholiya040205/" target='_blank'>LinkedIn.</a>
          </p>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
        </>
    );
}

export default About;