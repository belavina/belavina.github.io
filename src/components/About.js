import React, { Fragment } from "react";
import { CSSTransition } from 'react-transition-group';

// - local imports
import skills from './data/skills';

class About extends React.Component {

  state = { centered: true, skillDescription: null }

  updateDescription = (skillType, skillNumber) => {
    this.setState({
      skillDescription: skills[skillType][skillNumber].description
    });
  }

  render () {
    let skillBars = [];
    Object.keys(skills).forEach((skillType) => {
      skillBars.push(
        <Fragment key={skillType}>
          {/* skill group */}
          <h3 className="heading-tertiary u-margin-bottom-small">
            {skillType}
          </h3>
          {/* skill bars */}
          {skills[skillType].map((skill, idx) =>
            (<div 
              key={`${skill.name}-${skillType}`} 
              className={`about__skills__item about__skills__item--${skill.percentage}`}
              onMouseEnter={() => this.updateDescription(skillType, idx)}
              >
              {skill.name}
            </div>)
          )}
        </Fragment>
      );
    });

    return (
      <section className="about">
        <div className="about__overview">
          <div className="text-box">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Profile
            </h3>
            <p className="paragraph">
              Deeply committed to mastering my craft, I thrive on the day to day challenges that arise when creating content for the web. I aim to grow in the area of web development applying the latest trends and standards in a company that allows me to develop my creativity while acquiring new experience.
            </p>
          </div>
          <CSSTransition
            in={this.state.skillDescription !== null}
            timeout={300}
            classNames="star"
            unmountOnExit
          >
            <div className="text-box">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Skill
              </h3>
              <p className="paragraph">
                {this.state.skillDescription}
              </p>
            </div>
          </CSSTransition>
        </div>
        <div className="about__skills">
          {skillBars}
        </div>
      </section>
    );
  }
}

export default About;
