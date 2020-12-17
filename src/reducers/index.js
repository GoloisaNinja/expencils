import { combineReducers } from 'redux';
import expenses from './expenses';
import filters from './filters';
import auth from './auth';

export default combineReducers({
  expenses,
  filters,
  auth,
});
