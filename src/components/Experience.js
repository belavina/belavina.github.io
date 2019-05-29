import React from "react";
// import ReactCSSTransitionReplace from "react-css-transition-replace";

// - local imports
import experience from "./data/experience";
import Timeline from "./Timeline";

class Experience extends React.Component {
  state = {
    selectedRole: experience[experience.length - 1]
  };

  selectRole = job => {
    this.setState({ selectedRole: job });
  };

  render() {
    const { selectedRole } = this.state;

    return (
      <section className="experience">
        <Timeline
          timelineData={experience}
          selectBreakpoint={this.selectRole}
          selectedBp={selectedRole}
        />

        <div className="experience__decription u-fade-in-element">
          <div className="text-box experience__role">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {selectedRole.title} @{selectedRole.company}
            </h3>
            <p className="paragraph">{selectedRole.description}</p>
            <ul className="list">
              {selectedRole.keyItems.map(item => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          <div className="text-box experience__stack">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Software Stack
            </h3>
            <ul className="list">
              {selectedRole.technologies.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
