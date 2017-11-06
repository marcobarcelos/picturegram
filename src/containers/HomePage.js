import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shotsActions';
import ShotGrid from '../components/ShotGrid';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.fetchShots = this.fetchShots.bind(this);
    this.fetchNextShots = this.fetchNextShots.bind(this);
    this.hasMoreShots = this.hasMoreShots.bind(this);
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

  render() {
    return (
      <div>
        <ShotGrid
          shots={this.props.shots.items}
          hasMore={this.hasMoreShots()}
          loadMore={this.fetchNextShots}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  shots: PropTypes.object.isRequired
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
