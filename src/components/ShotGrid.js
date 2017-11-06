import React from 'react';
import PropTypes from 'prop-types';
import ShotItem from './ShotItem';

const ShotGrid = ({ shots }) => shots.map(shot => <ShotItem key={shot.id} shot={shot} />);

ShotGrid.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShotGrid;
