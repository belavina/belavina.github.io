import React from "react";

import PropTypes from "prop-types";

/**
 * Labeled progress bar of specified `%` completed
 */
const ProgressBar = ({ barName, barPercentage, onMouseEnter }) => (
  <div
    className={`progress-bar progress-bar--${barPercentage}`}
    onMouseEnter={onMouseEnter}
  >
    {barName}
  </div>
);

ProgressBar.propTypes = {
  barName: PropTypes.string.isRequired,
  barPercentage: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default ProgressBar;
