// GET VISIBLE EXPENSES

import { isEqual, isBefore, isAfter } from 'date-fns';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = expense.createdAt;

      const startDateMatch = startDate
        ? isEqual(startDate, createdAtMoment) ||
          isBefore(startDate, createdAtMoment)
        : true;
      const endDateMatch = endDate
        ? isEqual(endDate, createdAtMoment) || isAfter(endDate, createdAtMoment)
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
