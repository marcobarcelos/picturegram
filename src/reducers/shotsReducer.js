import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function shotsReducer(state = initialState.shots, action) {
  switch (action.type) {
    case types.SHOTS_REPLACE:
      return {
        ...state,
        items: action.shots,
        loading: false,
        error: null,
        links: {
          next: action.next
        }
      };

    case types.SHOTS_APPEND:
      return {
        ...state,
        items: [
          ...state.items,
          ...action.shots.filter(shot => !state.items.find(stateShot => shot.id === stateShot.id))
        ],
        loading: false,
        error: null,
        links: {
          next: action.next
        }
      };

    case types.FETCH_REQUEST:
      return { ...state, loading: true };

    case types.FETCH_ERROR:
      return { ...state, loading: false, error: 'An error occurred while fetching shots' };

    case types.GRID_MODE_UPDATE:
      return { ...state, gridMode: action.gridMode };

    case types.SHOT_DETAIL_SELECT:
      return {
        ...state,
        selectedItem: { ...action.selectedShot },
        loading: false,
        error: null
      };

    default:
      return state;
  }
}
