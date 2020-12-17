import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/totalExpenses';

const ExpenseSum = ({ expenses, sum }) => {
  const expenseWord = expenses.length === 1 ? 'expense' : 'expenses';
  const [show, toggleShow] = useState(false);
  const handleClick = () => {
    toggleShow(!show);
  };
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expenses.length}</span> {expenseWord} totalling{' '}
          <span>{numeral(sum / 100).format('$0,0.00')}</span>
          {show && (
            <div>
              <h1 className='page-header__pencils'>
                Perspective! Your ridiculous debts are equal to{' '}
                <span>{numeral(sum / 100 / 0.1).format('0,0')}</span> pencils!
              </h1>
            </div>
          )}
          <div className='page-header__actions'>
            <Link className='button' to='/create'>
              Add Expense
            </Link>
            <button className='button button--pencils' onClick={handleClick}>
              {show ? 'Hide my Shame' : 'Convert to Pencils'}
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
  sum: totalExpenses(getVisibleExpenses(state.expenses, state.filters)),
});

export default connect(mapStateToProps)(ExpenseSum);
