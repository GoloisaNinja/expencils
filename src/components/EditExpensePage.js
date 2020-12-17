import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
  <div className='content-container'>
    <h1 className='page-header__title'>Edit Expense</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/');
        console.log('updated', expense);
      }}
    />
    <div className='form-group'>
      <button
        className='button button--remove'
        onClick={(e) => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          props.history.push('/');
        }}>
        Remove Expense
      </button>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
