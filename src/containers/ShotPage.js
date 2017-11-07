import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shotsActions';
import ShotDetails from '../components/ShotDetails';

class ShotPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    window.scrollTo(0, 0);
    this.fetchShotDetails();
  }

  fetchShotDetails() {
    this.clearShotDetails();

    const shotId = parseInt(this.props.match.params.id, 0);
    const selectedShot = this.props.shots.items.find(shot => shot.id === shotId);

    if (selectedShot) {
      this.props.actions.setSelectedShot(selectedShot);
    } else {
      this.props.actions.fetchShotDetails(shotId);
    }
  }

  clearShotDetails() {
    if (this.props.shots.selectedItem) {
      this.props.actions.setSelectedShot(null);
    }
  }

  render() {
    const shotDetails = this.props.shots.selectedItem;
    return (
      <div className="shot-item-container">
        {shotDetails && <ShotDetails shot={shotDetails} />}
      </div>
    );
  }
}

ShotPage.propTypes = {
  match: PropTypes.object.isRequired,
  shots: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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
)(ShotPage);
