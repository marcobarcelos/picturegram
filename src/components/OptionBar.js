import React from 'react';
import PropTypes from 'prop-types';
import TiThLarge from 'react-icons/lib/ti/th-large';
import TiThSmall from 'react-icons/lib/ti/th-small';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';

const OptionBar = ({ gridMode, toggleGridMode }) => (
  <div className="option-bar">
    <div className="option-flex-placeholder" />
    <div className="app-title">Picturegram</div>

    <button className="grid-button" onClick={toggleGridMode}>
      {gridMode === GRID_MODE_LARGE && <TiThLarge />}
      {gridMode === GRID_MODE_SMALL && <TiThSmall />}
    </button>
  </div>
);

OptionBar.propTypes = {
  gridMode: PropTypes.string.isRequired,
  toggleGridMode: PropTypes.func.isRequired
};

export default OptionBar;
