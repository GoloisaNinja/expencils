import React from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? props.expense.createdAt : new Date(),
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please supply both an amount and a description.',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <div className='form-group'>
          <form className='form' onSubmit={this.onSubmit}>
            <Calendar
              onChange={(e) => this.onDateChange(e)}
              date={new Date(this.state.createdAt)}
            />
            <label>Expense Description</label>
            <input
              className='input-group__input'
              type='text'
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <label>Amount</label>
            <input
              className='input-group__input'
              type='text'
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            <label>Add a note to your Expense</label>
            <textarea
              className='textarea'
              value={this.state.note}
              onChange={this.onNoteChange}></textarea>
            <button className='button'>
              {this.props.expense ? 'Save Edits' : 'Add Expense'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
