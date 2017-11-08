import React from 'react';
import PropTypes from 'prop-types';
import TiThLarge from 'react-icons/lib/ti/th-large';
import TiThSmall from 'react-icons/lib/ti/th-small';
import TiZoom from 'react-icons/lib/ti/zoom';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';

const OptionBar = ({ gridMode, toggleGridMode }) => (
  <div className="option-bar">
    <div className="app-title">Picturegram</div>
    <input className="search-bar" type="text" placeholder="Search..." />
    <button className="grid-button">
      <TiZoom />
    </button>

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
