import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { GRID_MODE_SMALL } from '../constants/GridModes';
import ShotItem from './ShotItem';
import Loading from './Loading';

const ShotGrid = props => (
  <InfiniteScroll
    className={`shot-grid ${props.gridMode === GRID_MODE_SMALL ? 'small' : 'large'}-grid`}
    loadMore={props.loadMore}
    hasMore={props.hasMore}
    loader={<Loading />}
    threshold={1000}
    initialLoad
  >
    {props.shots.map(shot => <ShotItem key={shot.id} shot={shot} onSelect={props.onSelectItem} />)}
  </InfiniteScroll>
);

ShotGrid.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  gridMode: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func
};

ShotGrid.defaultProps = {
  onSelectItem: null
};

export default ShotGrid;
