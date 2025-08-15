import React from 'react';
import type { Experience } from '../../types';
import './Experience.scss';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="experience__title scroll-reveal">Professional Experience</h2>
        
        <div className="experience__timeline">
          {experience.map((job, index) => (
            <div key={job.id} className="experience__item scroll-reveal hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="experience__marker">
                <div className="experience__marker-dot animate-pulse"></div>
                {index < experience.length - 1 && (
                  <div className="experience__marker-line"></div>
                )}
              </div>
              
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__position">{job.position}</h3>
                  <div className="experience__type-badge hover-scale">
                    {job.type}
                  </div>
                </div>
                
                <div className="experience__company">
                  <span className="experience__company-name">{job.company}</span>
                  <span className="experience__location">📍 {job.location}</span>
                </div>
                
                <div className="experience__duration">
                  {job.startDate} - {job.endDate}
                </div>
                
                <ul className="experience__responsibilities">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="experience__responsibility">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                {job.technologies && job.technologies.length > 0 && (
                  <div className="experience__technologies">
                    <h4 className="experience__tech-title">Technologies Used:</h4>
                    <div className="experience__tech-list">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="experience__tech-tag hover-scale">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;