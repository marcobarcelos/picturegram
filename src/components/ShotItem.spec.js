import React from 'react';
import { shallow } from 'enzyme';
import ShotItem from './ShotItem';
import ShotImage from './ShotImage';
import ShotStats from './ShotStats';

describe('<ShotItem />', () => {
  const getProps = () => ({
    shot: { title: 'Shot title' },
    onSelect: jest.fn()
  });

  it('should contain shot image', () => {
    const props = getProps();
    const wrapper = shallow(<ShotItem shot={props.shot} onSelect={props.onSelect} />);
    expect(wrapper.find(ShotImage).exists()).toBe(true);
  });

  it('should contain shot stats', () => {
    const props = getProps();
    const wrapper = shallow(<ShotItem shot={props.shot} onSelect={props.onSelect} />);
    expect(wrapper.find(ShotStats).exists()).toBe(true);
  });

  it('should display shot title', () => {
    const props = getProps();
    const wrapper = shallow(<ShotItem shot={props.shot} onSelect={props.onSelect} />);
    expect(wrapper.find('.shot-description').text()).toBe(props.shot.title);
  });

  it('should invoke select event on click', () => {
    const props = getProps();
    const wrapper = shallow(<ShotItem shot={props.shot} onSelect={props.onSelect} />);
    wrapper.find('.shot-item').simulate('click');
    expect(props.onSelect).toBeCalledWith(props.shot);
  });

  it('should invoke select event on press enter key', () => {
    const props = getProps();
    const wrapper = shallow(<ShotItem shot={props.shot} onSelect={props.onSelect} />);
    wrapper.find('.shot-item').simulate('keyPress', { key: 'Enter' });
    expect(props.onSelect).toBeCalledWith(props.shot);
  });
  // it('should contain a grid button', () => {
  //   const toggleGridMode = () => {};
  //   const wrapper = shallow(<OptionBar
  //     gridMode={GRID_MODE_LARGE}
  //     toggleGridMode={toggleGridMode}
  //   />);
  //   const actual = wrapper.find('.grid-button').exists();
  //   const expected = true;
  //
  //   expect(actual).toBe(expected);
  // });
  //
  // it('should have a title called \'Picturegram\'', () => {
  //   const toggleGridMode = () => {};
  //   const wrapper = shallow(<OptionBar
  //     gridMode={GRID_MODE_LARGE}
  //     toggleGridMode={toggleGridMode}
  //   />);
  //   const actual = wrapper.find('.app-title').text();
  //   const expected = 'Picturegram';
  //
  //   expect(actual).toEqual(expected);
  // });
  //
  // it('should display large grid icon when large grid option selected', () => {
  //   const toggleGridMode = () => {};
  //   const wrapper = shallow(<OptionBar
  //     gridMode={GRID_MODE_LARGE}
  //     toggleGridMode={toggleGridMode}
  //   />);
  //   const actual = wrapper.find(TiThLarge).exists();
  //   const expected = true;
  //
  //   expect(actual).toEqual(expected);
  // });
  //
  // it('should display small grid icon when small grid option selected', () => {
  //   const toggleGridMode = () => {};
  //   const wrapper = shallow(<OptionBar
  //     gridMode={GRID_MODE_SMALL}
  //     toggleGridMode={toggleGridMode}
  //   />);
  //   const actual = wrapper.find(TiThSmall).exists();
  //   const expected = true;
  //
  //   expect(actual).toEqual(expected);
  // });
  //
  // it('should toggle grid mode on grid option clicked', () => {
  //   const toggleGridMode = jest.fn();
  //   const wrapper = shallow(<OptionBar
  //     gridMode={GRID_MODE_SMALL}
  //     toggleGridMode={toggleGridMode}
  //   />);
  //
  //   expect(toggleGridMode).not.toBeCalled();
  //   wrapper.find('.grid-button').simulate('click');
  //   expect(toggleGridMode).toBeCalled();
  // });
});
