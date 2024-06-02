import React from 'react';
import './Home.css';
import neel from './NEEL.png';
import Intro from './Intro';
import Typing from './Typing';

function Home() {
  return (
    <>
    <div className="home">
            <div className="home-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">Neel Dholiya</span></h1>
                <Typing
                text= {['Software Developer', 'Innovator', 'Player']}
                typingSpeed = {100}
                deletingSpeed = {60}
                duration = {1000}
                />
            </div>

            <div className="home-image">
                <img src={neel} alt="Neel's Image" />
            </div>
    </div>
    <Intro/>
    </>
  );
}

export default Home;