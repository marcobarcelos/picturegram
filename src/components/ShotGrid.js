import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import ShotItem from './ShotItem';

const ShotGrid = ({ shots, loadMore, hasMore }) => (
  <InfiniteScroll
    className="shot-grid"
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    threshold={1000}
    loader={<div className="loader">Loading ...</div>}
  >
    {shots.map(shot => <ShotItem key={shot.id} shot={shot} />)}
  </InfiniteScroll>
);

ShotGrid.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default ShotGrid;
