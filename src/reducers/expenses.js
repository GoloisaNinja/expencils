import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
  SET_EXPENSES,
  START_SET_EXPENSES,
} from '../actions/types';

// EXPENSES REDUCER

const expensesReducerDefaultState = [];

export default function (state = expensesReducerDefaultState, action) {
  switch (action.type) {
    case SET_EXPENSES:
      return action.expenses;
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);

    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}