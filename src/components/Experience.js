import React from "react";
import experience from "./data/experience";

class Experience extends React.Component {
  state = {
    selectedRole: experience[experience.length - 1]
  };

  calculateYears = startDate => {
    const ageDifMs = Date.now() - startDate.getTime();
    return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
  };

  selectRole = job => {
    this.setState({ selectedRole: job });
  };

  render() {
    let breakpoints = [];
    let dateMarks = [];
    const { selectedRole } = this.state;

    let firstDate = new Date(experience[0].startDate);
    firstDate.setMonth(firstDate.getMonth() - 3);

    const timelineSpan = new Date() - firstDate; // 100% of the timeline
    // percentage from the total timeline
    const calcLeft = d => ((d - firstDate) * 100) / timelineSpan;

    experience.forEach(job => {
      const startPercentage = calcLeft(new Date(job.startDate));
      const endPercentage = job.endDate ? calcLeft(new Date(job.endDate)) : 100;
      breakpoints.push(
        <div
          onClick={() => this.selectRole(job)}
          className="experience__timeline-breakpoint"
          style={{
            left: `${startPercentage}%`,
            width: `${endPercentage - startPercentage}%`
          }}
          key={`${job.title}-${job.company}`}
        >
          <h3 className="experience__timeline-job">
            <span className="experience__timeline-title">{job.title}</span>
            <span className="experience__timeline-company">{job.company}</span>
          </h3>
        </div>
      );
    });

    const yearsExperience = this.calculateYears(new Date(firstDate));
    for (let i = 0; i <= yearsExperience; i++) {
      let markDate = new Date(new Date().getFullYear(), 0, 1);
      markDate.setFullYear(new Date().getFullYear() - i);

      dateMarks.push(
        <div
          className="experience__timeline-date-mark"
          style={{ left: `${calcLeft(new Date(markDate))}%` }}
          key={markDate}
        >
          <span className="experience__timeline-date-year">
            {markDate.getFullYear()}
          </span>
        </div>
      );
    }

    return (
      <section className="experience">
        <div className="experience__timeline">
          {breakpoints}
          <div className="experience__timeline-history" />
          <div className="experience__timeline-dates">{dateMarks}</div>
        </div>
        <div className="experience__decription">
          <div className="text-box experience__role">
            <h3 className="heading-tertiary u-margin-bottom-small">Role</h3>
            <p className="paragraph">{selectedRole.description}</p>
            <ul className="list">
              {selectedRole.keyItems.map(item => (
                <li key={item}>{item}</li>
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
