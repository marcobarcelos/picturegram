import { SHOTS_RECEIVED, SHOTS_REQUEST, SHOTS_ERROR } from '../constants/ActionTypes';
import objectAssign from 'object-assign'; // TODO: remove this dep from package.json
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
    // case CALCULATE_FUEL_SAVINGS:
    //   newState = objectAssign({}, state);
    //   newState[action.fieldName] = action.value;
    //   newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
    //   newState.dateModified = action.dateModified;
    //
    //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
    //     newState.savings = calculator().calculateSavings(newState);
    //   }
    //
    //   return newState;

    default:
      return state;
  }
}
