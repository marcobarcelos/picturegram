import React from 'react';
import { shallow } from 'enzyme';
import { ShotPage } from './ShotPage';
import ShotDetails from '../components/ShotDetails';
import Loading from '../components/Loading';

describe('<ShotPage />', () => {
  it('should display <Loading /> when loading data', () => {
    const actions = { setSelectedShot: () => {}, fetchShotDetails: () => {} };
    const match = { params: { id: 0 } };
    const shots = { items: [], loading: true };
    const wrapper = shallow(<ShotPage actions={actions} shots={shots} match={match} />);
    expect(wrapper.find(Loading).exists()).toEqual(true);
  });

  it('should display <ShotDetails /> when selected item present', () => {
    const actions = { setSelectedShot: () => {}, fetchShotDetails: () => {} };
    const match = { params: { id: 0 } };
    const shots = { items: [], selectedItem: {}, loading: false };
    const wrapper = shallow(<ShotPage actions={actions} shots={shots} match={match} />);
    expect(wrapper.find(ShotDetails).exists()).toEqual(true);
  });

  it('should fetch shot details from state on startup when found', () => {
    const actions = { setSelectedShot: jest.fn(), fetchShotDetails: jest.fn() };
    const shotId = 123;
    const shotItem = { id: shotId };
    const shotItems = [shotItem];
    const match = { params: { id: shotId.toString() } };
    const shots = { items: shotItems, selectedItem: {}, loading: false };

    expect(actions.setSelectedShot).not.toBeCalled();
    expect(actions.fetchShotDetails).not.toBeCalled();
    shallow(<ShotPage actions={actions} shots={shots} match={match} />);
    expect(actions.setSelectedShot).toBeCalledWith(null);
    expect(actions.setSelectedShot).toBeCalledWith(shotItem);
    expect(actions.setSelectedShot.mock.calls.length).toBe(2);
    expect(actions.fetchShotDetails).not.toBeCalled();
  });

  it('should fetch shot details from api on startup when not found on state', () => {
    const actions = { setSelectedShot: jest.fn(), fetchShotDetails: jest.fn() };
    const shotId = 123;
    const shotItems = [{ id: 456 }];
    const match = { params: { id: shotId.toString() } };
    const shots = { items: shotItems, selectedItem: {}, loading: false };

    expect(actions.setSelectedShot).not.toBeCalled();
    expect(actions.fetchShotDetails).not.toBeCalled();
    shallow(<ShotPage actions={actions} shots={shots} match={match} />);
    expect(actions.setSelectedShot).toBeCalledWith(null);
    expect(actions.setSelectedShot.mock.calls.length).toBe(1);
    expect(actions.fetchShotDetails).toBeCalledWith(shotId);
  });
});
