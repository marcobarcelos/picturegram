import { SHOTS_REPLACE, SHOTS_APPEND, SHOTS_REQUEST, SHOTS_ERROR } from '../constants/ActionTypes';
import initialState from './initialState';

export default function shotsReducer(state = initialState.shots, action) {
  switch (action.type) {
    case SHOTS_REPLACE:
      return { // TODO: Verify object spread (browser compatibility)
        ...state,
        items: action.shots,
        loading: false,
        error: null,
        links: {
          next: action.next
        }
      };

    case SHOTS_APPEND:
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

    case SHOTS_REQUEST:
      return { ...state, loading: true };

    case SHOTS_ERROR:
      return { ...state, loading: false, error: 'An error occurred while fetching shots' };

    default:
      return state;
  }
}
