import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Root from './Root';
import App from './App';

describe('<Root />', () => {
  const store = { subscribe: () => {}, dispatch: () => {}, getState: () => {} };
  const history = {};

  it('should contain <App />', () => {
    const wrapper = shallow(<Root store={store} history={history} />);
    expect(wrapper.find(App).exists()).toBe(true);
  });

  it('should contain react-redux <ConnectedRouter />', () => {
    const wrapper = shallow(<Root store={store} history={history} />);
    expect(wrapper.find(ConnectedRouter).exists()).toBe(true);
  });

  it('should contain react-redux <Provider />', () => {
    const wrapper = shallow(<Root store={store} history={history} />);
    expect(wrapper.find(Provider).exists()).toBe(true);
  });
});
