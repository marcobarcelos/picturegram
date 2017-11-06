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
  }

  fetchShots() {
    this.props.actions.fetchShots();
  }

  render() {
    return (
      <span>
        <button onClick={this.fetchShots}>Fetch</button>
        <div>
          <ShotGrid shots={this.props.shots.items} />
        </div>
      </span>
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
