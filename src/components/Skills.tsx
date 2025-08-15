import React from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort skills within each category by level (Proficient first)
  Object.keys(skillsByCategory).forEach(category => {
    skillsByCategory[category].sort((a, b) => {
      if (a.level === 'Proficient' && b.level === 'Familiar') return -1;
      if (a.level === 'Familiar' && b.level === 'Proficient') return 1;
      return a.name.localeCompare(b.name);
    });
  });

  const categoryOrder = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud', 'AI', 'Other'];
  const sortedCategories = categoryOrder.filter(cat => skillsByCategory[cat]);

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title scroll-reveal">Tech Stacks</h2>
        
        <div className="skills__grid">
          {sortedCategories.map((category, index) => (
            <div
              key={category}
              className={`skills__category scroll-reveal hover-lift animate-delay-${(index + 1) * 100}`}
            >
              <h3 className="skills__category-title">{category}</h3>
              
              <div className="skills__list">
                {skillsByCategory[category].map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`skill-item skill-item--${skill.level.toLowerCase()} hover-scale`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill.logo && (
                      <span className="skill-item__logo">
                        {skill.logo.startsWith('http') || skill.logo.startsWith('/') ? (
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="skill-item__logo-image"
                          />
                        ) : (
                          skill.logo
                        )}
                      </span>
                    )}
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__legend scroll-reveal animate-delay-600">
          <div className="legend-item">
            <span className="legend-item__indicator legend-item__indicator--proficient"></span>
            <span className="legend-item__text">Proficient</span>
          </div>
          <div className="legend-item">
            <span className="legend-item__indicator legend-item__indicator--familiar"></span>
            <span className="legend-item__text">Familiar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;