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
