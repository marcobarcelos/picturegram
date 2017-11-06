import React from 'react';
import PropTypes from 'prop-types';

const ShotItem = ({ shot }) => (
  <div>
    <div>Shot {shot.title}</div>
    <div>
      <img alt={shot.title} src={shot.images.normal} />
    </div>
  </div>
);

ShotItem.propTypes = {
  shot: PropTypes.object.isRequired
};

export default ShotItem;
