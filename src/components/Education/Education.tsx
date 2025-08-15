import React from 'react';
import type { Education } from '../../types';
import './Education.scss';

interface EducationProps {
  education: Education[];
}

const EducationComponent: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <h2 className="education__title">Education</h2>
        
        <div className="education__list">
          {education.map((edu, index) => (
            <div key={index} className="education__item">
              <div className="education__content">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__field">{edu.field}</p>
                <div className="education__institution">
                  <span className="education__institution-name">{edu.institution}</span>
                  <span className="education__location">{edu.location}</span>
                </div>
                <p className="education__year">{edu.year}</p>
              </div>
              <div className="education__icon">
                🎓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;