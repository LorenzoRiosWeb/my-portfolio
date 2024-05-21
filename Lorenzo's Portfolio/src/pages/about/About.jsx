import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2 className="about-heading">Hi, I'm Lorenzo Rios</h2>
        <div className="about-line"></div>
        <p className="about-info">
          I am an aspiring web developer. Since the age of 14, I've always wondered how websites were made.
          Eventually, I let my curiosity guide me towards becoming a web developer. Although I faced challenges
          and took breaks along the way, my determination led me to enroll in the University of Utah Web Development
          Bootcamp. Now, I am equipped with the skills to create impactful web applications and make a difference.
        </p>
      </div>
      <div className="goal-section">
        <div className="goal-line"></div>
        <h2 className="goal-heading">My Goal</h2>
        <p className="goal-info">
          My goal is to empower new startups by crafting professional websites that enable them to expand their reach
          and make a positive impact. Through my work, I aim to contribute to the growth and success of emerging
          businesses and create meaningful solutions for the digital world.
        </p>
      </div>
    </div>
  );
};

export default About;
