import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { GRID_MODE_SMALL } from '../constants/GridModes';
import ShotItem from './ShotItem';

const ShotGrid = props => (
  <InfiniteScroll
    className={`shot-grid ${props.gridMode === GRID_MODE_SMALL ? 'small' : 'large'}-grid`}
    pageStart={0}
    initialLoad={false}
    loadMore={props.loadMore}
    hasMore={props.hasMore}
    threshold={1000}
  >
    {props.shots.map(shot => <ShotItem key={shot.id} shot={shot} onClick={props.onClickItem} />)}
  </InfiniteScroll>
);

ShotGrid.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  gridMode: PropTypes.string.isRequired,
  onClickItem: PropTypes.func
};

ShotGrid.defaultProps = {
  onClickItem: null
};

export default ShotGrid;
