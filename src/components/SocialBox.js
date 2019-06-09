import React from "react";
import PropTypes from "prop-types";

/**
 * Box with an icon linking to social media
 */
const SocialBox = ({ boxDetails }) => (
  <a
    href={boxDetails.link}
    className="btn-group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="btn-group__icon-box">
      <svg>
        <use xlinkHref={`/images/sprite.svg#${boxDetails.icon}`} />
      </svg>
    </div>
  </a>
);

SocialBox.propTypes = {
  boxDetails: PropTypes.shape({
    /** sprite path for the svg icon */
    icon: PropTypes.string.isRequired,
    /** link to the social media */
    link: PropTypes.string.isRequired
  }).isRequired
};

export default SocialBox;
