import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import { startOfMonth, endOfMonth } from 'date-fns/esm';

const ExpenseListFilters = ({
  filters,
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
}) => {
  const [range, setRange] = useState([
    {
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
      key: 'selection',
    },
  ]);
  const handleChange = (e) => {
    setRange([e.selection]);
    const startDate = e.selection.startDate;
    const endDate = e.selection.endDate;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className='content-container'>
      <div className='input-group'>
        <div className='input-group__item'>
          <DateRange
            editableDateInputs={true}
            dateDisplayFormat={'MM/dd/yyyy'}
            onChange={(e) => handleChange(e)}
            moveRangeOnFirstSelection={false}
            ranges={range}
          />
        </div>
        <div className='input-group__mobile'>
          <div className='input-group__item item--two'>
            <label>Search Expense Text</label>
            <input
              type='text'
              className='input-group__input input--two'
              value={filters.text}
              onChange={(e) => {
                setTextFilter(e.target.value);
              }}
            />
          </div>
          <div className='input-group__item item--three'>
            <label>Sort Expenses By</label>
            <select
              className='input-group__input input--three'
              value={filters.sortBy}
              onChange={(e) => {
                e.target.value === 'date' ? sortByDate() : sortByAmount();
              }}>
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpenseListFilters.propTypes = {
  setTextFilter: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortByAmount: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
})(ExpenseListFilters);
