import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/email.png"  // Path relative to public directory
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:boyleconor8@gmail.com">boyleconor8@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="/linkedin.png"  // Path relative to public directory
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/conorboyle18/">LinkedIn</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="/phone.png"  // Path relative to public directory
            alt="Phone icon"
            className="icon contact-icon"
          />
          <p><a href="tel:4434931874">443-493-1874</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
