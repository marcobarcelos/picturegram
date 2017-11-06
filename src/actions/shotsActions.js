import * as types from '../constants/ActionTypes';
import { getAllShots } from '../api/shots';

function fetchShotsRequest() {
  return {
    type: types.SHOTS_REQUEST
  };
}

function fetchShotsReceived(shots) {
  return {
    type: types.SHOTS_RECEIVED,
    shots
  };
}

function fetchShotsError() {
  return {
    type: types.SHOTS_ERROR
  };
}

export function fetchShots() {
  return (dispatch) => {
    dispatch(fetchShotsRequest());

    return getAllShots()
      .then(data => dispatch(fetchShotsReceived(data)))
      .catch(() => dispatch(fetchShotsError()));
  };
}
