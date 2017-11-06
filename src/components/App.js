import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
