import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES,
  START_SET_EXPENSES,
} from './types';
import database from '../firebase/firebase';

// ACTIONS NEEDED
//
// ADD_EXPENSE

export const addExpense = (expense) => (dispatch) => {
  dispatch({
    type: ADD_EXPENSE,
    expense,
  });
};

// FIREBASE_EXPENSE PUSH -> ADD_EXPENSE

export const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = '',
  } = expenseData;
  const expense = {
    createdAt,
    description,
    note,
    amount,
  };
  database
    .ref(`users/${uid}/expenses`)
    .push(expense)
    .then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
};

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id,
});

// START REMOVE EXPENSE TO REMOVE EXPENSE FROM DB

export const startRemoveExpense = ({ id }) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return database
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });
};

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

// START EDIT EXPENSE TO EDIT EXPENSE IN THE DB

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return database
    .ref(`users/${uid}/expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
};

// SET EXPENSES

export const setExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

// START SET EXPENSES FROM FIREBASE

export const startSetExpenses = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return database
    .ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
    });
};
