import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LandingPage from '../components/LandingPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={LandingPage} />
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
