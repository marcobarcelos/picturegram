import * as types from '../constants/ActionTypes';
import { getInitialShots, getNextShots } from '../api/shots';

function fetchShotsRequest() {
  return {
    type: types.SHOTS_REQUEST
  };
}

function fetchShotsAppend({ data, next, prev }) {
  return {
    type: types.SHOTS_APPEND,
    shots: data,
    next,
    prev
  };
}

function fetchShotsReplace({ data, next, prev }) {
  return {
    type: types.SHOTS_REPLACE,
    shots: data,
    next,
    prev
  };
}

function fetchShotsError() {
  return {
    type: types.SHOTS_ERROR
  };
}

export function fetchInitialShots() {
  return (dispatch) => {
    dispatch(fetchShotsRequest());

    return getInitialShots()
      .then(response => dispatch(fetchShotsReplace(response)))
      .catch((err) => { console.error(err); dispatch(fetchShotsError()); });
  };
}

export function fetchNextShots(nextLink) {
  return (dispatch) => {
    dispatch(fetchShotsRequest());

    return getNextShots(nextLink)
      .then(response => dispatch(fetchShotsAppend(response)))
      .catch(() => dispatch(fetchShotsError()));
  };
}
