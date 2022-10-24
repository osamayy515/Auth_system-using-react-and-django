import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link text-white' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    );
    
    const authLinks = () => (
        <li className='nav-item'>
                <a className='nav-link text-white' href='#!' onClick={logout}>Logout</a>
        </li>
    );

    return(
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand text-white' to='/'>Auth System</Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNavAltMarkup' 
                    aria-controls='navbarNavAltMarkup' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link active text-white' aria-current='page' to='/'>Home</Link>
                    </li>
                    {isAuthenticated ? authLinks() : guestLinks()}
                  </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);