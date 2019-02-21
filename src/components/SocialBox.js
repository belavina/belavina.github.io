import React from "react";
import PropTypes from 'prop-types';


/**
 * Box with an icon linking to social media
 */
const SocialBox = ({ boxDetails }) => (
  <div className="social__icon-box" key={boxDetails.icon}>
    <a href={boxDetails.link} className="social__link" target="_blank">
      <svg className="social__icon">
        <use xlinkHref={`/images/sprite.svg#${boxDetails.icon}`}/>
      </svg>
    </a>
  </div>
);

SocialBox.propTypes = {
  boxDetails: PropTypes.shape({
    /** sprite path for the svg icon */
    icon: PropTypes.string,
    /** link to the social media */
    link: PropTypes.string,
  }),
};

export default SocialBox;
