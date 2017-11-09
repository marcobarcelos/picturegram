import React from 'react';
import { shallow } from 'enzyme';
import TiThLarge from 'react-icons/lib/ti/th-large';
import TiThSmall from 'react-icons/lib/ti/th-small';
import OptionBar from './OptionBar';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';

describe('<OptionBar />', () => {
  it('should contain a grid button', () => {
    const toggleGridMode = () => {};
    const wrapper = shallow(<OptionBar
      gridMode={GRID_MODE_LARGE}
      toggleGridMode={toggleGridMode}
    />);
    const actual = wrapper.find('.grid-button').exists();
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('should have a title called \'Picturegram\'', () => {
    const toggleGridMode = () => {};
    const wrapper = shallow(<OptionBar
      gridMode={GRID_MODE_LARGE}
      toggleGridMode={toggleGridMode}
    />);
    const actual = wrapper.find('.app-title').text();
    const expected = 'Picturegram';

    expect(actual).toEqual(expected);
  });

  it('should display large grid icon when large grid option selected', () => {
    const toggleGridMode = () => {};
    const wrapper = shallow(<OptionBar
      gridMode={GRID_MODE_LARGE}
      toggleGridMode={toggleGridMode}
    />);
    const actual = wrapper.find(TiThLarge).exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should display small grid icon when small grid option selected', () => {
    const toggleGridMode = () => {};
    const wrapper = shallow(<OptionBar
      gridMode={GRID_MODE_SMALL}
      toggleGridMode={toggleGridMode}
    />);
    const actual = wrapper.find(TiThSmall).exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should toggle grid mode on grid option clicked', () => {
    const toggleGridMode = jest.fn();
    const wrapper = shallow(<OptionBar
      gridMode={GRID_MODE_SMALL}
      toggleGridMode={toggleGridMode}
    />);

    expect(toggleGridMode).not.toBeCalled();
    wrapper.find('.grid-button').simulate('click');
    expect(toggleGridMode).toBeCalled();
  });
});
