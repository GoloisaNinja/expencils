import { startOfMonth, endOfMonth } from 'date-fns';
import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE,
} from '../actions/types';

// FILTERS REDUCER
const today = new Date();
console.log(today);
const initialState = {
  text: '',
  sortBy: 'date',
  startDate: startOfMonth(today),
  endDate: endOfMonth(today),
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: payload,
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount',
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: payload,
      };
    default:
      return state;
  }
}
