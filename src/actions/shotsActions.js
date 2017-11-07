import * as types from '../constants/ActionTypes';
import { getInitialShots, getNextShots, getShotDetails } from '../api/shots';

function fetchRequest() {
  return {
    type: types.FETCH_REQUEST
  };
}

function fetchError() {
  return {
    type: types.FETCH_ERROR
  };
}

function shotsAppend({ data, next, prev }) {
  return {
    type: types.SHOTS_APPEND,
    shots: data,
    next,
    prev
  };
}

function shotsReplace({ data, next, prev }) {
  return {
    type: types.SHOTS_REPLACE,
    shots: data,
    next,
    prev
  };
}

export function setGridMode(gridMode) {
  return {
    type: types.GRID_MODE_UPDATE,
    gridMode
  };
}

export function setSelectedShot(selectedShot) {
  return {
    type: types.SHOT_DETAIL_SELECT,
    selectedShot
  };
}

export function fetchShotDetails(shotId) {
  return (dispatch) => {
    dispatch(fetchRequest());

    return getShotDetails(shotId)
      .then(response => dispatch(setSelectedShot(response)))
      .catch(() => dispatch(fetchError()));
  };
}

export function fetchInitialShots() {
  return (dispatch) => {
    dispatch(fetchRequest());

    return getInitialShots()
      .then(response => dispatch(shotsReplace(response)))
      .catch(() => dispatch(fetchError()));
  };
}

export function fetchNextShots(nextLink) {
  return (dispatch) => {
    dispatch(fetchRequest());

    return getNextShots(nextLink)
      .then(response => dispatch(shotsAppend(response)))
      .catch(() => dispatch(fetchError()));
  };
}
