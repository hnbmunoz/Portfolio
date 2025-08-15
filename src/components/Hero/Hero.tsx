import React from 'react';
import { PersonalInfo } from '../../types';
import './Hero.scss';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__name animate-fade-in-up">{personalInfo.name}</h1>
            <h2 className="hero__title animate-fade-in-up animate-delay-200">{personalInfo.title}</h2>
            <p className="hero__location animate-fade-in-up animate-delay-300">📍 {personalInfo.location}</p>
            <p className="hero__summary animate-fade-in-up animate-delay-400">{personalInfo.summary}</p>
            
            <div className="hero__actions animate-fade-in-up animate-delay-500">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn--accent hover-lift"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="btn btn--secondary hover-lift"
              >
                View Experience
              </a>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  className="btn btn--secondary hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
          
          <div className="hero__links animate-fade-in-right animate-delay-600">
            <div className="social-links">
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-links__item hover-scale"
                title="Email"
              >
                📧 {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="social-links__item hover-scale"
                title="Phone"
              >
                📱 {personalInfo.phone}
              </a>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  className="social-links__item hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  💼 LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  className="social-links__item hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  🐙 GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;