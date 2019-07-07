import React, { Fragment, useState } from "react";
import ReactCSSTransitionReplace from "react-css-transition-replace";

// - local imports
import skills from "../data/skills";
import devInfo from "../data/devInfo";
import ProgressBar from "./ProgressBar";

/**
 * About dev section containing personal profile and skill set presented as
 * skill bars
 */
function About() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillBars = [];
  // populate skill-bars
  Object.keys(skills).forEach(skillType => {
    skillBars.push(
      <Fragment key={skillType}>
        <h3 className="heading-tertiary u-margin-bottom-small">{skillType}</h3>
        {skills[skillType].map(skill => (
          <ProgressBar
            key={`${skill.name}-${skillType}`}
            barName={skill.name}
            onMouseEnter={() => setSelectedSkill(skill)}
            barPercentage={skill.percentage}
          />
        ))}
      </Fragment>
    );
  });

  return (
    <section className="about">
      <div className="about__overview">
        {/* General description */}
        <div className="text-box dev-details u-fade-in-element">
          <h3 className="heading-tertiary u-margin-bottom-small">Profile</h3>
          <p className="paragraph">
            <span className="paragraph__block">
              Hello there!
              <br />
              {devInfo.shortIntro}
            </span>
            {devInfo.description}
          </p>
        </div>
        {/* Skill details (if selected) */}
        {selectedSkill && selectedSkill.description && (
          <ReactCSSTransitionReplace transitionName="u-fade-in">
            <div className="text-box skill-details">
              <h3 className="heading-tertiary u-margin-bottom-small">
                {selectedSkill.name}
              </h3>
              <p className="paragraph">{selectedSkill.description}</p>
            </div>
          </ReactCSSTransitionReplace>
        )}
      </div>
      {/* Skill bars */}
      <div className="about__skills">{skillBars}</div>
    </section>
  );
}

export default About;
