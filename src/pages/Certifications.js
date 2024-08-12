import React from 'react';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "A certification demonstrating foundational cloud knowledge, skills, and best practices for using AWS services.",
    date: "August 2023",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  // Add more certifications here as needed
];

function Certifications() {
  return (
    <section id="certifications">
      <h1 className="title">Certifications</h1>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h2 className="certification-title">{cert.title}</h2>
            <p className="certification-description">{cert.description}</p>
            <p className="certification-date"><strong>Date:</strong> {cert.date}</p>
            <p className="certification-link">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">Learn more</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
