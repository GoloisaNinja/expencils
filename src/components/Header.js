import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Header = ({ startLogout }) => (
  <div>
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className='header__title' to='/dashboard'>
            <h1>Expencils</h1>
          </Link>
          <button className='button button--link' onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  </div>
);

Header.propTypes = {
  startLogout: PropTypes.func.isRequired,
};

export default connect(null, { startLogout })(Header);
