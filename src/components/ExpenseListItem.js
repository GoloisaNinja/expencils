import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <Link className='list-item' to={`/edit/${id}`}>
    <div>
      <h3 className='list-item__title'>{description}</h3>
      <span className='list-item__subtitle'>
        {format(createdAt, 'MMMM do, yyyy')}
      </span>
    </div>
    <h3 className='list-item__data'>
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default ExpenseListItem;
