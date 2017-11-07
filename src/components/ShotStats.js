import React from 'react';
import PropTypes from 'prop-types';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiEyeOutline from 'react-icons/lib/ti/eye-outline';

const ShotStats = ({ viewsCount, likesCount }) => (
  <span className="shot-stats">
    <span className="views"><TiEyeOutline /> {viewsCount}</span>
    <span className="likes"><TiHeartOutline /> {likesCount}</span>
  </span>
);

ShotStats.propTypes = {
  viewsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default ShotStats;

