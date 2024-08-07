import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conor Boyle</h1>
        <h4>Software Engineer</h4>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/education">Education</a></li>
            <li className="nav-item"><a href="/projects">Projects</a></li>
            <li className="nav-item"><a href="/certifications">Certifications</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="education">
          <h1 className="title">Education</h1>
          <div className="details-container">
            <img src="./education.png" alt="Education icon" className="icon" />
            <p>B.S. Bachelor's Degree<br />Computer Science<br />May 2024</p>
          </div>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Relevant Courses</h2>
                <div className="article-container">
                  {['Data structures and algorithm analysis', 'Data communications and networking', 'Software engineering', 'Operating systems', 'Database management systems', 'Artificial intelligence', 'Object-oriented design and programming', 'Mobile application development', 'Software quality assurance and testing'].map(course => (
                    <article key={course}>
                      <div>
                        <h3>{course}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="projects">
          <h1>Projects</h1>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </div>
        <div className="certifications">
          <h1>Certifications</h1>
          <ul className="certification-list">
            <li>AWS Certified Cloud Practitioner</li>
          </ul>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p>Phone: 443-493-1874</p>
          <p>Email: boyleconor8@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/conorboyle18/">conorboyle18</a></p>
          <p>GitHub: <a href="https://github.com/Conorboyle8">Conorboyle8</a></p>
        </div>
      </main>
      <footer className="footer">
        <p>Created by Conor Boyle</p>
        <p>2024</p>
        <p>Made using React</p>
      </footer>
    </div>
  );
}

export default App;
