import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Header';
import { Users } from './components/Users';
import './App.scss';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </>
);

export default App;
