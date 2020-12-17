import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = ({ startAddExpense, history }) => (
  <div className='content-container'>
    <h1 className='page-header__title'>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        startAddExpense(expense);
        history.push('/');
      }}
    />
  </div>
);

AddExpensePage.propTypes = {
  startAddExpense: PropTypes.func.isRequired,
};

export default connect(null, { startAddExpense })(withRouter(AddExpensePage));
