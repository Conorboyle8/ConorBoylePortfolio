import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Conor Boyle</h1>
          <h4>Software Engineer</h4>
          <nav>
            <ul className="nav-list">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/about">About</a></li>
              <li className="nav-item"><a href="/education">Education</a></li>
              <li className="nav-item"><a href="/projects">Projects</a></li>
              <li className="nav-item"><a href="/certifications">Certifications</a></li>
              <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>Created by Conor Boyle</p>
          <p>2024</p>
          <p>Made using React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
