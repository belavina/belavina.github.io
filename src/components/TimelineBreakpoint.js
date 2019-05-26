import React from "react";
import PropTypes from "prop-types";

class TimelineBreakpoint extends React.Component {
  state = {
    bpOveflown: false
  };

  componentDidMount() {
    if (this.bpTitle && this.isOverflown(this.bpTitle)) {
      this.setState({ bpOveflown: true });
    }
  }

  isOverflown = element => {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  };

  bpTitle = {};

  render() {
    const ovflCls = noOvflwCls =>
      this.state.bpOveflown ? `${noOvflwCls}--overflown` : noOvflwCls;
    const { selectBreakpoint, calcLeft, job, selectedBp, bpKey } = this.props;

    const startPercentage = calcLeft(new Date(job.startDate));
    const endPercentage = job.endDate ? calcLeft(new Date(job.endDate)) : 100;

    const bpSelectedClass =
      bpKey(job) == bpKey(selectedBp) ? "timeline__breakpoint--selected" : "";

    const bpClassees =
      "timeline__breakpoint " +
      `${ovflCls("timeline__breakpoint")} ` +
      bpSelectedClass;

    return (
      <div
        onClick={() => selectBreakpoint(job)}
        className={bpClassees}
        style={{
          left: `${startPercentage}%`,
          width: `${endPercentage - startPercentage}%`
        }}
        key={bpKey(job)}
      >
        <h3 className={`timeline__bp-header ${ovflCls("timeline__bp-header")}`}>
          <span
            className={`${ovflCls("timeline__bp-header")}--main`}
            ref={ref => {
              this.bpTitle = ref;
              return true;
            }}
          >
            {job.title}
          </span>
          <span className={`${ovflCls("timeline__bp-header")}--sub`}>
            {job.company}
          </span>
        </h3>
      </div>
    );
  }
}

TimelineBreakpoint.propTypes = {
  job: PropTypes.object.isRequired,
  selectedBp: PropTypes.object.isRequired,

  selectBreakpoint: PropTypes.func.isRequired,
  bpKey: PropTypes.func.isRequired,
  calcLeft: PropTypes.func.isRequired
};

export default TimelineBreakpoint;
