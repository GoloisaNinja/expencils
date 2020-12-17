import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseSum from './ExpenseSum';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseSum />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashBoardPage;
