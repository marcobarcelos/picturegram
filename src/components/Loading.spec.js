import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should contain a spinner', () => {
    const wrapper = shallow(<Loading />);
    const actual = wrapper.find('.loading').exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
