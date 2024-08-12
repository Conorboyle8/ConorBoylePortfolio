import React from 'react';

const educationDetails = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Towson University",
    graduationDate: "May 2024",
    details: [
      "Data Structures and Algorithm Analysis",
      "Data Communications and Networking",
      "Software Engineering",
      "Artificial Intelligence",
      "Database Management Systems",
      "Operating Systems",
      "Mobile Application Development",
      "Software Quality Assurance and Testing"
    ]
  }
  // Add more educational experiences if needed
];

function Education() {
  return (
    <section id="education">
      <p className="section__text__p1">Education</p>
      <h1 className="title">My Educational Background</h1>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-item">
            <h2 className="education-degree">{edu.degree}</h2>
            <p className="education-institution"><strong>Institution:</strong> {edu.institution}</p>
            <p className="education-date"><strong>Graduation Date:</strong> {edu.graduationDate}</p>
            <div className="education-details">
              <h3>Relevant Coursework:</h3>
              <ul>
                {edu.details.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
