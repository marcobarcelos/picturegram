import { SHOTS_RECEIVED, SHOTS_REQUEST, SHOTS_ERROR } from '../constants/ActionTypes';
import initialState from './initialState';

export default function shotsReducer(state = initialState.shots, action) {
  switch (action.type) {
    case SHOTS_RECEIVED:
      return { // TODO: Verify object spread (browser compatibility)
        ...state,
        items: action.shots,
        loading: false,
        error: null
      };

    case SHOTS_REQUEST:
      return { ...state, loading: true };

    case SHOTS_ERROR:
      return { ...state, loading: false, error: 'An error occurred while fetching shots' };

    default:
      return state;
  }
}
