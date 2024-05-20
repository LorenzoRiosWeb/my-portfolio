import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
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
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span> </span>
            <span>t</span>
            <span>o</span>
            <span> </span>
            <span>M</span>
            <span>y</span>
            <span> </span>
            <span>P</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>
            <span>o</span>
          </h1>
          <p>I'm Lorenzo, a passionate web developer crafting amazing digital experiences.</p>
          <Link to="/project" className="hero-button">View My Work</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
