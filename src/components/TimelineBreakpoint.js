import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function TimelineBreakpoint({ selectBreakpoint, calcLeft, bpItem }) {
  const [bpOveflown, setBpOverflown] = useState(false);
  const bpTitle = useRef(null);

  useEffect(() => {
    if (bpTitle && isOverflown(bpTitle)) {
      setBpOverflown(true);
    }
  }, []);

  const isOverflown = element => {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  };

  const ovflCls = noOvflwCls =>
    bpOveflown ? `${noOvflwCls}--overflown` : noOvflwCls;

  const startPercent = calcLeft(new Date(bpItem.startDate));
  const endPercent = bpItem.endDate ? calcLeft(new Date(bpItem.endDate)) : 100;

  const bpClasses = [
    "timeline__breakpoint",
    ovflCls("timeline__breakpoint"),
    bpItem.selected ? "timeline__breakpoint--selected" : ""
  ].join(" ");

  return (
    <div
      onClick={() => selectBreakpoint(bpItem)}
      className={bpClasses}
      style={{
        left: `${startPercent}%`,
        width: `${endPercent - startPercent}%`
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
  bpItem: PropTypes.object.isRequired,
  selectBreakpoint: PropTypes.func.isRequired,
  calcLeft: PropTypes.func.isRequired
};

export default TimelineBreakpoint;
