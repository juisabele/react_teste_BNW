import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './container/Cart';
import Payment from './container/Payment';

export default () => (
  <Switch>
    <Route exact path="/" component={Cart} />
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/Payment" component={Payment} />
  </Switch>
);
