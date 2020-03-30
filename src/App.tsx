import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Users } from './components/Users';
import './App.scss';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/tt_betmedia/" exact component={Header} />
      <Route path="/tt_betmedia/users" component={Users} />
    </Switch>
  </>
);

export default App;
