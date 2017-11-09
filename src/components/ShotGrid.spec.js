import React from 'react';
import { shallow } from 'enzyme';
import InfiniteScroll from 'react-infinite-scroller';
import { GRID_MODE_SMALL, GRID_MODE_LARGE } from '../constants/GridModes';
import ShotGrid from './ShotGrid';
import ShotItem from './ShotItem';

describe('<ShotGrid />', () => {
  const getProps = () => ({
    shots: [{ id: 1 }, { id: 2 }, { id: 3 }],
    hasMore: false,
    loadMore: () => {},
    gridMode: GRID_MODE_SMALL,
    onSelectedItem: () => {}
  });

  it('should contain infinite scroll', () => {
    const props = getProps();
    const wrapper = shallow(<ShotGrid
      shots={props.shots}
      hasMore={props.hasMore}
      loadMore={props.loadMore}
      gridMode={props.gridMode}
      onSelectedItem={props.onSelectedItem}
    />);
    expect(wrapper.find(InfiniteScroll).exists()).toBe(true);
  });

  it('should apply small-grid css class when small grid option selected', () => {
    const props = getProps();
    const wrapper = shallow(<ShotGrid
      shots={props.shots}
      hasMore={props.hasMore}
      loadMore={props.loadMore}
      gridMode={props.gridMode}
      onSelectedItem={props.onSelectedItem}
    />);
    expect(wrapper.find(InfiniteScroll).prop('className').includes('small-grid')).toBe(true);
  });

  it('should apply large-grid css class when large grid option selected', () => {
    const props = getProps();
    props.gridMode = GRID_MODE_LARGE;
    const wrapper = shallow(<ShotGrid
      shots={props.shots}
      hasMore={props.hasMore}
      loadMore={props.loadMore}
      gridMode={props.gridMode}
      onSelectedItem={props.onSelectedItem}
    />);
    expect(wrapper.find(InfiniteScroll).prop('className').includes('large-grid')).toBe(true);
  });

  it('should render shot items', () => {
    const props = getProps();
    const wrapper = shallow(<ShotGrid
      shots={props.shots}
      hasMore={props.hasMore}
      loadMore={props.loadMore}
      gridMode={props.gridMode}
      onSelectedItem={props.onSelectedItem}
    />);

    const allShotItems = wrapper.find(ShotItem);
    expect(allShotItems.length).toBe(3);
    expect(allShotItems.at(0).props().shot.id).toBe(1);
    expect(allShotItems.at(1).props().shot.id).toBe(2);
    expect(allShotItems.at(2).props().shot.id).toBe(3);
  });
});
