import React from 'react';
import PropTypes from 'prop-types';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiEyeOutline from 'react-icons/lib/ti/eye-outline';

const ShotItem = ({ shot }) => (
  <div className="shot-item-container">
    <div className="shot-item">
      <div className="shot-image">
        <img alt={shot.title} src={shot.images.normal} />
        <div className="shot-details">
          <span className="stats">
            <span className="views"><TiEyeOutline /> {shot.views_count}</span>
            <span className="likes"><TiHeartOutline /> {shot.likes_count}</span>
          </span>
        </div>
        {/* style={{ backgroundImage: `url(${shot.images.normal})` }} */}
      </div>
      <div className="shot-description">{shot.title}</div>
    </div>
  </div>
);

ShotItem.propTypes = {
  shot: PropTypes.object.isRequired
};

export default ShotItem;
