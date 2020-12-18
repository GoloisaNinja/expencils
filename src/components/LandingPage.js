import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from '../actions/auth';

const LandingPage = ({ startLogin }) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>
          <img className='box-layout__image' src='/images/pencilIcon.png' />{' '}
          Expencils
        </h1>
        <p className='box-layout__text'>
          Your expenses. Pencils. Expencils. Intrigued? Of course you are.
        </p>
        <button className='button' onClick={startLogin}>
          Login With Google
        </button>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

export default connect(null, { startLogin })(LandingPage);
