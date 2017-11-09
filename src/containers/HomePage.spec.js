import React from 'react';
import { shallow } from 'enzyme';
import Sticky from 'react-stickynode';
import { HomePage } from './HomePage';
import ShotGrid from '../components/ShotGrid';
import OptionBar from '../components/OptionBar';

describe('<HomePage />', () => {
  const actions = {};
  const shots = { items: [], gridMode: '' };
  const history = {};
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage actions={actions} shots={shots} history={history} />);
  });

  it('should contain <ShotGrid />', () => {
    expect(wrapper.find(ShotGrid).exists()).toEqual(true);
  });

  it('should contain <OptionBar />', () => {
    expect(wrapper.find(OptionBar).exists()).toEqual(true);
  });

  it('should contain <Sticky />', () => {
    expect(wrapper.find(Sticky).exists()).toEqual(true);
  });
});
