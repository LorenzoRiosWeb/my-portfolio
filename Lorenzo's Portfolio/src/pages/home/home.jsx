import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to My Portfolio');

  useEffect(() => {
    const letters = document.querySelectorAll('.hero-content h1 span');

    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="welcome-text">
            {welcomeMessage.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <p>I'm Lorenzo, a passionate web developer crafting amazing digital experiences.</p>
          <Link to="/projects" className="hero-button">View My Work</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
