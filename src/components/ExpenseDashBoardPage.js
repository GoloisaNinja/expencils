import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseSum from './ExpenseSum';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSum />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
