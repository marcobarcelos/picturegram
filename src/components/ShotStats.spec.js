import React from 'react';
import { shallow } from 'enzyme';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiEyeOutline from 'react-icons/lib/ti/eye-outline';
import ShotStats from './ShotStats';

describe('<ShotStats />', () => {
  const viewsCount = 1234;
  const likesCount = 5678;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ShotStats
      viewsCount={viewsCount}
      likesCount={likesCount}
    />);
  });

  it('should contain views icon', () => {
    const iconExists = wrapper.find(TiEyeOutline).exists();
    expect(iconExists).toBe(true);
  });

  it('should display views count', () => {
    const viewsText = wrapper.find('.views').text();
    expect(viewsText.includes(viewsCount)).toBe(true);
  });

  it('should contain likes icon', () => {
    const iconExists = wrapper.find(TiHeartOutline).exists();
    expect(iconExists).toBe(true);
  });

  it('should display likes count', () => {
    const likesText = wrapper.find('.likes').text();
    expect(likesText.includes(likesCount)).toBe(true);
  });
});
