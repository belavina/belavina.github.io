import React from "react";
import PropTypes from "prop-types";

const Timeline = ({ timelineData, selectBreakpoint, selectedBp }) => {
  // array of job span items and year marks
  let breakpoints = [];
  let dateMarks = [];

  console.log(selectedBp);

  // pad first date to the left by subtracting 3 months
  let firstDate = new Date(timelineData[0].startDate);
  firstDate.setMonth(firstDate.getMonth() - 3);

  // 100% of the timeline
  const timelineSpan = new Date() - firstDate;

  // percentage from the total timeline
  const calcLeft = d => ((d - firstDate) * 100) / timelineSpan;

  timelineData.forEach(job => {
    const startPercentage = calcLeft(new Date(job.startDate));
    const endPercentage = job.endDate ? calcLeft(new Date(job.endDate)) : 100;
    breakpoints.push(
      <div
        onClick={() => selectBreakpoint(job)}
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

  // get number of years
  const yearsExperience = Math.abs(
    new Date(Date.now() - firstDate.getTime()).getUTCFullYear() - 1970
  );

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
    <div className="experience__timeline">
      {breakpoints}
      <div className="experience__timeline-history" />
      <div className="experience__timeline-dates">{dateMarks}</div>
    </div>
  );
};

Timeline.propTypes = {
  timelineData: PropTypes.array.isRequired
};

export default Timeline;
