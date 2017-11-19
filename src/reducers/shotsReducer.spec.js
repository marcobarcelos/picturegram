import * as types from '../constants/ActionTypes';
import reducer from './shotsReducer';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';

describe('Reducers::shotsReducer', () => {
  const getInitialState = () => ({
    gridMode: GRID_MODE_SMALL,
    loading: false,
    error: null,
    items: [],
    selectedItem: null,
    links: {
      next: ''
    }
  });

  const getAppState = () => ({
    gridMode: GRID_MODE_SMALL,
    loading: false,
    error: null,
    items: [{ id: 567 }, { id: 890 }],
    selectedItem: null,
    links: {
      next: 'http://next'
    }
  });

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FETCH_REQUEST', () => {
    const action = { type: types.FETCH_REQUEST };
    const expected = { ...getAppState(), loading: true };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle FETCH_ERROR', () => {
    const action = { type: types.FETCH_ERROR };
    const expected = { ...getAppState(), loading: false, error: 'An error occurred while fetching shots data' };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle GRID_MODE_UPDATE', () => {
    const action = { type: types.GRID_MODE_UPDATE, gridMode: GRID_MODE_LARGE };
    const expected = { ...getAppState(), gridMode: GRID_MODE_LARGE };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SHOT_DETAIL_SELECT', () => {
    const selectedShot = { id: 123 };
    const action = { type: types.SHOT_DETAIL_SELECT, selectedShot };
    const expected = {
      ...getAppState(),
      selectedItem: selectedShot,
      loading: false,
      error: null
    };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SHOTS_REPLACE', () => {
    const shots = [{ id: 222 }, { id: 333 }];
    const next = 'http://new-next.com';
    const action = { type: types.SHOTS_REPLACE, shots, next };
    const expected = {
      ...getAppState(),
      items: shots,
      loading: false,
      error: null,
      links: {
        next
      }
    };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SHOTS_APPEND', () => {
    const shots = [{ id: 222 }, { id: 333 }];
    const next = 'http://new-next.com';
    const action = { type: types.SHOTS_APPEND, shots, next };
    const previousState = getAppState();
    const expected = {
      ...getAppState(),
      items: previousState.items.concat(shots),
      loading: false,
      error: null,
      links: {
        next
      }
    };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});
