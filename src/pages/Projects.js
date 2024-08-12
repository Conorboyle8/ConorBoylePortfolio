import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <strong>Project Management System:</strong> 
          <ul>
            <img src="./project1Screen.png" alt="Project 1" className="icon" />
            <li>Site allows user to manage jobs and tracks financials included.</li>
            <li>Individual project which is currently live and used by a drywall contractor.</li>
            <li>Technologies used: PHP, SQL, HTML/CSS, Bootstrap, GIT</li>
          </ul>
        </li>
        <li>
          <strong>Inventory Management System:</strong> 
          <ul>
            <li>Site allows user to manage jobs and tracks financials included.</li>
            <li>Individual project which is currently live and used by a drywall contractor.</li>
            <li>Technologies used: PHP, SQL, HTML/CSS, Bootstrap, GIT</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
