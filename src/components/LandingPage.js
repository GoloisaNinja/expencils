import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from '../actions/auth';

const LandingPage = ({ startLogin }) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expencils</h1>
        <p>Understand your expenses. With pencils.</p>
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
