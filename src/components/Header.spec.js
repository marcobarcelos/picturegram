import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('should have a title called \'Picturegram\'', () => {
    const wrapper = shallow(<Header />);
    const actual = wrapper.find('.title').text();
    const expected = 'Picturegram';

    expect(actual).toEqual(expected);
  });
});
