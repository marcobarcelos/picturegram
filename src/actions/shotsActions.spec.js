/* eslint-disable prefer-spread */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from '../constants/ActionTypes';
import * as actions from './shotsActions';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to set the grid mode', () => {
    const gridMode = true;
    const actual = actions.setGridMode(gridMode);
    const expected = {
      type: types.GRID_MODE_UPDATE,
      gridMode
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action to select a shot', () => {
    const selectedShot = { id: '123' };
    const actual = actions.setSelectedShot(selectedShot);
    const expected = {
      type: types.SHOT_DETAIL_SELECT,
      selectedShot
    };

    expect(actual).toEqual(expected);
  });

  it('should select shot when fetching shot details', () => {
    const shotId = '123';
    const shotDetails = { id: shotId };
    const expectedActions = [
      { type: types.FETCH_REQUEST },
      { type: types.SHOT_DETAIL_SELECT, selectedShot: shotDetails }
    ];

    fetchMock.getOnce('glob:https://api.dribbble.com/v1/shots/*', {
      body: shotDetails,
      headers: {
        'content-type': 'application/json'
      }
    });

    const store = mockStore({ shots: {} });

    return store.dispatch(actions.fetchShotDetails(shotId))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should replace shots when fetching initial shots', () => {
    const shots = [{ id: '123' }];
    const prev = 'http://prev.com';
    const next = 'http://next.com';
    const linkHeader = `<${prev}>; rel="prev", <${next}>; rel="next"`;
    const expectedActions = [
      {
        type: types.FETCH_REQUEST
      },
      {
        type: types.SHOTS_REPLACE,
        shots,
        next,
        prev
      }
    ];

    fetchMock.getOnce('begin:https://api.dribbble.com/v1/shots?access_token=', {
      body: shots,
      headers: {
        'content-type': 'application/json',
        Link: linkHeader
      }
    });

    const store = mockStore({ shots: {} });

    return store.dispatch(actions.fetchInitialShots())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should append shots when fetching next page shots', () => {
    const shots = [{ id: '456' }];
    const prev = 'https://api.dribbble.com/v1/shots?access_token=&&page=1';
    const next = 'https://api.dribbble.com/v1/shots?access_token=&&page=3';
    const nextLink = 'https://api.dribbble.com/v1/shots?access_token=&&page=2';
    const linkHeader = `<${prev}>; rel="prev", <${next}>; rel="next"`;
    const expectedActions = [
      {
        type: types.FETCH_REQUEST
      },
      {
        type: types.SHOTS_APPEND,
        shots,
        next,
        prev
      }
    ];

    fetchMock.getOnce('begin:https://api.dribbble.com/v1/shots?access_token=', {
      body: shots,
      headers: {
        'content-type': 'application/json',
        Link: linkHeader
      }
    });

    const store = mockStore({ shots: [] });

    return store.dispatch(actions.fetchNextShots(nextLink))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should set error when fetching error occurs', () => {
    const requestCount = 3;
    const expectedActions = [].concat.apply([], (new Array(requestCount)).fill([
      { type: types.FETCH_REQUEST },
      { type: types.FETCH_ERROR }
    ]));

    fetchMock.get('begin:https://api.dribbble.com/v1/shots', {
      body: { error: true },
      status: 500,
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore({ shots: [] });

    const promise = [
      () => store.dispatch(actions.fetchShotDetails(1)),
      () => store.dispatch(actions.fetchInitialShots()),
      () => store.dispatch(actions.fetchNextShots('https://api.dribbble.com/v1/shots?page=2'))
    ].reduce((p, np) => p.then(np), Promise.resolve());

    return promise.then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
