import React from 'react';
import experience from './data/experience';


class Experience extends React.Component {


  calculateYears = (startDate) => { 
    const ageDifMs = Date.now() - startDate.getTime();
    return Math.abs((new Date(ageDifMs)).getUTCFullYear() - 1970);
  }

  render() {

    let breakpoints = [];
    let dateMarks = [];

    let firstDate = new Date(experience[0].startDate);
    firstDate.setMonth(firstDate.getMonth() - 3);
    
    const timelineSpan = new Date() - firstDate; // 100% of the timeline
    // percentage from the total timeline
    const calcLeft = (d) => (d - firstDate)*100/timelineSpan;

    experience.forEach((job) => {
      const startPercentage = calcLeft(new Date(job.startDate));
      const endPercentage = job.endDate ? calcLeft(new Date(job.endDate)) : 100;
      breakpoints.push(
        <div 
          className="experience__timeline-breakpoint"
          style={{ 
            left: `${startPercentage}%`,
            width: `${endPercentage - startPercentage}%`
          }}
        >
          <h3 className="experience__timeline-job">
            <span className="experience__timeline-title">{job.title}</span>
            <span className="experience__timeline-company">{job.company}</span>
          </h3>
        </div>
      );
    });

    const yearsExperience = this.calculateYears(new Date(firstDate));
    for (let i=0; i <= yearsExperience; i++) {
  
      let markDate = new Date(new Date().getFullYear(), 0, 1);
      markDate.setFullYear(new Date().getFullYear() - i);

      dateMarks.push(
        <div 
          className="experience__timeline-date-mark"
          style={{ left: `${calcLeft(new Date(markDate))}%` }} 
        >
          <span className="experience__timeline-date-year">{markDate.getFullYear()}</span>
        </div>
      );
    }
    
    
    return (
      <div className="experience">
        <div className="experience__timeline">
          {breakpoints}
          <div className="experience__timeline-history"/>
          <div className="experience__timeline-dates">
            {dateMarks}
          </div>
        </div>
        <div className="experience__decription">
          <div className="text-box">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Profile
            </h3>
            <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu viverra nisl. Curabitur dignissim pharetra enim, ut iaculis nibh interdum facilisis. Nullam ultrices urna ante, in suscipit velit eleifend vitae. Nam eget blandit urna. Aliquam velit quam, imperdiet ac dui quis, placerat lacinia nisi. In auctor est ac diam hendrerit malesuada. Quisque et neque molestie, ornare magna a, tristique risus. Cras egestas quis dolor vitae accumsan. Vestibulum cursus felis a eleifend semper.
            </p>
          </div>
          <div className="text-box">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Profile
            </h3>
            <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu viverra nisl. Curabitur dignissim pharetra enim, ut iaculis nibh interdum facilisis. Nullam ultrices urna ante, in suscipit velit eleifend vitae. Nam eget blandit urna. Aliquam velit quam, imperdiet ac dui quis, placerat lacinia nisi. In auctor est ac diam hendrerit malesuada. Quisque et neque molestie, ornare magna a, tristique risus. Cras egestas quis dolor vitae accumsan. Vestibulum cursus felis a eleifend semper.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
