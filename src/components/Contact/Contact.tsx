import React from 'react';
import type { PersonalInfo } from '../../types';
import './Contact.scss';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__item">
              <div className="contact__item-icon">📧</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="contact__item-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="contact__item">
              <div className="contact__item-icon">📱</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Phone</h3>
                <a href={`tel:${personalInfo.phone}`} className="contact__item-link">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="contact__item">
              <div className="contact__item-icon">📍</div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Location</h3>
                <span className="contact__item-text">{personalInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div className="contact__social">
            <h3 className="contact__social-title">Connect With Me</h3>
            <div className="contact__social-links">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <span className="contact__social-icon">💼</span>
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <span className="contact__social-icon">🐙</span>
                  GitHub
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact__social-link"
              >
                <span className="contact__social-icon">📧</span>
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact__cta">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn--primary btn--lg"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;