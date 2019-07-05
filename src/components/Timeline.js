import React from "react";
import PropTypes from "prop-types";

// - local imports
import TimelineBreakpoint from "./TimelineBreakpoint";

function Timeline({ timelineData, selectBreakpoint, selectedBp }) {
  const bpKey = j => `${j.title}-${j.company}-${j.startDate}`;
  const getTotalYears = startDate =>
    Math.abs(
      new Date(Date.now() - startDate.getTime()).getUTCFullYear() - 1970
    );

  // array of job span items and year marks
  const breakpoints = [];
  const dateMarks = [];

  // pad first date to the left by subtracting 3 months
  const firstDate = new Date(timelineData[0].startDate);
  firstDate.setMonth(firstDate.getMonth() - 3);

  // 100% of the timeline
  const timelineSpan = new Date() - firstDate;

  // percentage from the total timeline (left transform)
  const calcLeft = d => ((d - firstDate) * 100) / timelineSpan;

  timelineData.forEach(job => {
    breakpoints.push(
      <TimelineBreakpoint
        selectBreakpoint={selectBreakpoint}
        calcLeft={calcLeft}
        bpItem={{
          ...job,
          selected: bpKey(job) == bpKey(selectedBp),
          header: job.title,
          subHeader: job.company
        }}
        selectedBp={selectedBp}
        bpKey={bpKey}
        key={bpKey(job)}
      />
    );
  });

  // get number of years & populate datetile
  const yearsExperience = getTotalYears(firstDate);

  [...Array(yearsExperience)].forEach((_, i) => {
    const markDate = new Date(new Date().getFullYear(), 0, 1);
    markDate.setFullYear(new Date().getFullYear() - i);
    const percentFromLeft = calcLeft(new Date(markDate));

    if (percentFromLeft >= 0) {
      dateMarks.push(
        <div
          className="timeline__date-mark"
          style={{ left: `${percentFromLeft}%` }}
          key={markDate}
        >
          <span className="timeline__year-mark">{markDate.getFullYear()}</span>
        </div>
      );
    }
  });

  return (
    <div className="timeline">
      <div className="timeline__breakpoint-group">{breakpoints}</div>
      <div className="timeline__ribbon" />
      <div className="timeline__dateline">{dateMarks}</div>
    </div>
  );
}

Timeline.propTypes = {
  timelineData: PropTypes.array.isRequired,
  selectBreakpoint: PropTypes.func.isRequired,
  selectedBp: PropTypes.object.isRequired
};

export default Timeline;
