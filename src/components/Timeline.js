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
  const jobKey = j => `${j.title}-${j.company}-${j.startDate}`;

  timelineData.forEach(job => {
    const startPercentage = calcLeft(new Date(job.startDate));
    const endPercentage = job.endDate ? calcLeft(new Date(job.endDate)) : 100;
    const selectedClass =
      jobKey(job) == jobKey(selectedBp) ? "timeline__breakpoint--selected" : "";

    breakpoints.push(
      <div
        onClick={() => selectBreakpoint(job)}
        className={`timeline__breakpoint ${selectedClass}`}
        style={{
          left: `${startPercentage}%`,
          width: `${endPercentage - startPercentage}%`
        }}
        key={jobKey(job)}
      >
        <h3 className="timeline__bp-header">
          <span className="timeline__bp-header--main">{job.title}</span>
          <span className="timeline__bp-header--sub">{job.company}</span>
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
        className="timeline__date-mark"
        style={{ left: `${calcLeft(new Date(markDate))}%` }}
        key={markDate}
      >
        <span className="timeline__year-mark">{markDate.getFullYear()}</span>
      </div>
    );
  }

  return (
    <div className="timeline">
      {breakpoints}
      <div className="timeline__ribbon" />
      <div className="timeline__dateline">{dateMarks}</div>
    </div>
  );
};

Timeline.propTypes = {
  timelineData: PropTypes.array.isRequired,
  selectBreakpoint: PropTypes.func.isRequired,
  selectedBp: PropTypes.object.isRequired
};

export default Timeline;
