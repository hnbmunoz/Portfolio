import React from 'react';
import type { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title scroll-reveal">Get In Touch</h2>
        <p className="contact__subtitle scroll-reveal animate-delay-200">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__item scroll-reveal hover-lift animate-delay-300">
              <div className="contact__item-icon">📧</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact__item-link"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="contact__item scroll-reveal hover-lift animate-delay-400">
              <div className="contact__item-icon">📱</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Phone</h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact__item-link"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="contact__item scroll-reveal hover-lift animate-delay-500">
              <div className="contact__item-icon">📍</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Location</h3>
                <span className="contact__item-text">{personalInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div className="contact__social scroll-reveal animate-delay-600">
            <h3 className="contact__social-title">Connect with me</h3>
            <div className="contact__social-links">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  className="contact__social-link hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__social-icon">💼</span>
                  LinkedIn
                </a>
              )}
              
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  className="contact__social-link hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__social-icon">🐙</span>
                  GitHub
                </a>
              )}
              
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  className="contact__social-link hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__social-icon">📄</span>
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="contact__cta scroll-reveal animate-delay-700">
          <a
            href={`mailto:${personalInfo.email}?subject=Let's work together&body=Hi Henri, I'd like to discuss a potential opportunity with you.`}
            className="btn btn--primary btn--lg hover-glow"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;