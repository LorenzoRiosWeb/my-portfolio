import React, { useState } from 'react';
import './project.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Note Taker',
      description: 'This is a Note Taker where you can take notes and save it in the local storage. This was one of the first projects I have done using Express.js',
      link: 'https://github.com/LorenzoRiosWeb/Note-Taker?tab=readme-ov-file',
    },
    {
      name: 'J.A.T.E',
      description: 'In this Project I created A Text editor using PWA so you can use this Text editor online while also saving the data in the IndexDB.',
      link: 'https://github.com/LorenzoRiosWeb/Text-Editor',
    },
    {
      name: 'Work Day Scheuler',
      description: 'In this Project I created a Work Day scheduler using only Javascript with Local Storage as well as CSS to style the page this was one of my very first project to learn Day.js and local Storage.',
      link: 'https://github.com/LorenzoRiosWeb/work-day-schedule',
    },
  ]);

  return (
    <div className="project-container">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
