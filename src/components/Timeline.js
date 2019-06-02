import React from "react";
import PropTypes from "prop-types";

// - local imports
import TimelineBreakpoint from "./TimelineBreakpoint";

class Timeline extends React.Component {
  bpKey = j => `${j.title}-${j.company}-${j.startDate}`;

  getTotalYears = startDate =>
    Math.abs(
      new Date(Date.now() - startDate.getTime()).getUTCFullYear() - 1970
    );

  render() {
    const { timelineData, selectBreakpoint, selectedBp } = this.props;
    // array of job span items and year marks
    let breakpoints = [];
    let dateMarks = [];

    // pad first date to the left by subtracting 3 months
    let firstDate = new Date(timelineData[0].startDate);
    firstDate.setMonth(firstDate.getMonth() - 3);

    // 100% of the timeline
    const timelineSpan = new Date() - firstDate;

    // percentage from the total timeline
    const calcLeft = d => ((d - firstDate) * 100) / timelineSpan;

    timelineData.forEach(job => {
      breakpoints.push(
        <TimelineBreakpoint
          selectBreakpoint={selectBreakpoint}
          calcLeft={calcLeft}
          job={job}
          selectedBp={selectedBp}
          bpKey={this.bpKey}
          key={this.bpKey(job)}
        />
      );
    });

    // get number of years & populate datetile
    const yearsExperience = this.getTotalYears(firstDate);

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
  }
}

Timeline.propTypes = {
  timelineData: PropTypes.array.isRequired,
  selectBreakpoint: PropTypes.func.isRequired,
  selectedBp: PropTypes.object.isRequired
};

export default Timeline;
