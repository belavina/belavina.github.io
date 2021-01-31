import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function TimelineBreakpoint({ selectBreakpoint, calcLeft, bpItem }) {
  const [bpOverflown, setBpOverflown] = useState(false);
  const bpTitle = useRef(null);

  useEffect(() => {
    if (bpTitle && isOverflown(bpTitle)) {
      setBpOverflown(true);
    }
  }, []);

  const isOverflown = ({ current }) =>
    current.scrollHeight > current.clientHeight ||
    current.scrollWidth > current.clientWidth;

  const ovflCls = (noOvflwCls) =>
    bpOverflown ? `${noOvflwCls}--overflown` : noOvflwCls;

  const startPercent = calcLeft(new Date(bpItem.startDate));
  const endPercent = bpItem.endDate ? calcLeft(new Date(bpItem.endDate)) : 100;

  const bpClasses = [
    "timeline__breakpoint",
    ovflCls("timeline__breakpoint"),
    bpItem.selected ? "timeline__breakpoint--selected" : "",
  ].join(" ");

  return (
    <div
      onClick={() => selectBreakpoint(bpItem)}
      className={bpClasses}
      style={{
        left: `${startPercent}%`,
        width: `${endPercent - startPercent}%`,
      }}
    >
      <h3 className={`timeline__bp-header ${ovflCls("timeline__bp-header")}`}>
        <span
          className={`${ovflCls("timeline__bp-header")}--main`}
          ref={bpTitle}
        >
          {bpItem.header}
        </span>
        <span className={`${ovflCls("timeline__bp-header")}--sub`}>
          {bpItem.subHeader}
        </span>
      </h3>
    </div>
  );
}

TimelineBreakpoint.propTypes = {
  /* Breakpoint data such as date range values and text */
  bpItem: PropTypes.object.isRequired,
  /* Called when breakpoint is selected */
  selectBreakpoint: PropTypes.func.isRequired,
  /* Calculate '%' padded from the left */
  calcLeft: PropTypes.func.isRequired,
};

export default TimelineBreakpoint;
