import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should contain a heart icon', () => {
    const wrapper = shallow(<Footer />);
    const actual = wrapper.find('.heart').exists();
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('should have a link to author\'s website', () => {
    const wrapper = shallow(<Footer />);
    const actual = wrapper.find('a').prop('href');
    const expected = 'https://marcobarcelos.com';

    expect(actual).toBe(expected);
  });
});
