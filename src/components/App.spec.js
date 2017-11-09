import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';

describe('<App />', () => {
  it('should have a header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should have a footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should have a router switch', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Switch).exists()).toBe(true);
  });
});
