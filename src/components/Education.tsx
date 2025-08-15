import React from 'react';
import type { Education } from '../types';

interface EducationProps {
  education: Education[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <h2 className="education__title scroll-reveal">Education</h2>
        
        <div className="education__list">
          {education.map((edu, index) => (
            <div key={edu.id} className="education__item scroll-reveal hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="education__content">
                <h3 className="education__degree">{edu.degree}</h3>
                {edu.field && (
                  <p className="education__field">{edu.field}</p>
                )}
                <div className="education__institution">
                  <span className="education__institution-name">{edu.institution}</span>
                  {edu.location && (
                    <span className="education__location">📍 {edu.location}</span>
                  )}
                </div>
                <div className="education__year">{edu.year}</div>
              </div>
              <div className="education__icon animate-float">
                🎓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;