import React, { Fragment } from "react";
import ReactCSSTransitionReplace from "react-css-transition-replace";

// - local imports
import skills from "./data/skills";
import devInfo from "./data/devInfo";

class About extends React.Component {
  state = {
    centered: true,
    selectedSkill: null
  };

  updateDescription = skill => {
    this.setState({
      selectedSkill: skill
    });
  };

  clearDescription = () => {
    this.setState({ selectedSkill: null });
  };

  render() {
    let skillBars = [];
    Object.keys(skills).forEach(skillType => {
      skillBars.push(
        <Fragment key={skillType}>
          {/* skill group */}
          <h3 className="heading-tertiary u-margin-bottom-small">
            {skillType}
          </h3>
          {/* skill bars */}
          {skills[skillType].map(skill => (
            <div
              key={`${skill.name}-${skillType}`}
              className={`progress-bar progress-bar--${skill.percentage}`}
              onMouseEnter={() => this.updateDescription(skill)}
            >
              {skill.name}
            </div>
          ))}
        </Fragment>
      );
    });

    const { selectedSkill } = this.state;

    return (
      <section className="about">
        <div className="about__overview">
          <div className="text-box u-fade-in-element">
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
          {selectedSkill && selectedSkill.description && (
            <ReactCSSTransitionReplace transitionName="u-fade-in">
              <div className="text-box" key={selectedSkill.name}>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {selectedSkill.name}
                </h3>
                <p className="paragraph">{selectedSkill.description}</p>
              </div>
            </ReactCSSTransitionReplace>
          )}
        </div>
        <div className="about__skills">{skillBars}</div>
      </section>
    );
  }
}

export default About;
