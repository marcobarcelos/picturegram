import React from 'react';
import { shallow } from 'enzyme';
import TiWarningOutline from 'react-icons/lib/ti/warning-outline';
import ErrorAlert from './ErrorAlert';

describe('<ErrorAlert />', () => {
  it('should contain a warning icon', () => {
    const wrapper = shallow(<ErrorAlert message="" />);
    const actual = wrapper.find(TiWarningOutline).exists();
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('should display the error message', () => {
    const errorMessage = 'Error message test';
    const wrapper = shallow(<ErrorAlert message={errorMessage} />);
    const actualMessage = wrapper.find('.error-message').text();

    expect(actualMessage).toBe(errorMessage);
  });
});
