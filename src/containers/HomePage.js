import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';
import * as actions from '../actions/shotsActions';
import ShotGrid from '../components/ShotGrid';
import OptionBar from '../components/OptionBar';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.fetchShots = this.fetchShots.bind(this);
    this.fetchNextShots = this.fetchNextShots.bind(this);
    this.hasMoreShots = this.hasMoreShots.bind(this);
    this.displayShotDescription = this.displayShotDescription.bind(this);
    this.toggleGridMode = this.toggleGridMode.bind(this);
  }

  fetchShots() {
    this.props.actions.fetchShots();
  }

  hasMoreShots() {
    return !this.props.shots.loading && !!this.props.shots.links.next;
  }

  fetchNextShots() {
    this.props.actions.fetchNextShots(this.props.shots.links.next);
  }

  displayShotDescription(shot) {
    this.props.history.push(`/shots/${shot.id}`);
  }

  toggleGridMode() {
    this.props.actions.setGridMode(this.props.shots.gridMode === GRID_MODE_SMALL ?
      GRID_MODE_LARGE :
      GRID_MODE_SMALL);
  }

  render() {
    return (
      <div>
        <Sticky enabled={true}>
          <OptionBar
            gridMode={this.props.shots.gridMode}
            toggleGridMode={this.toggleGridMode}
          />
        </Sticky>
        <ShotGrid
          shots={this.props.shots.items}
          hasMore={this.hasMoreShots()}
          loadMore={this.fetchNextShots}
          onClickItem={this.displayShotDescription}
          gridMode={this.props.shots.gridMode}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  shots: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    shots: state.shots
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
