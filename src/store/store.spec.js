import * as types from '../constants/ActionTypes';
import { configureStore } from './configureStore';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';

describe('Store', () => {
  it('should handle actions', () => {
    const store = configureStore();
    const actions = [
      { type: types.GRID_MODE_UPDATE, gridMode: GRID_MODE_SMALL },
      { type: types.SHOT_DETAIL_SELECT, selectedShot: { id: 1 } },
      { type: types.GRID_MODE_UPDATE, gridMode: GRID_MODE_LARGE },
      { type: types.SHOT_DETAIL_SELECT, selectedShot: { id: 2 } },
      { type: types.GRID_MODE_UPDATE, gridMode: GRID_MODE_SMALL },
      { type: types.SHOTS_REPLACE, shots: [{ id: 1 }, { id: 2 }, { id: 3 }] },
      { type: types.SHOTS_REPLACE, shots: [{ id: 4 }, { id: 5 }, { id: 6 }] },
      { type: types.SHOTS_APPEND, shots: [{ id: 7 }, { id: 8 }] },
      { type: types.FETCH_REQUEST },
      { type: types.FETCH_ERROR }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    expect(actual.shots).toMatchSnapshot();
  });
});
