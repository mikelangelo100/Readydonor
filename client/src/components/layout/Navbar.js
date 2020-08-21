import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import Logo from '../../img/logo.png';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="">
        <li className="">
          <Link className="" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="">
          <Link className="" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              //title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <div className ="nav-bar">
        <ul className="nav-list">
        <li className="nav-items">
          <Link className="" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links" to="/login">
            Login
          </Link>
        </li>
      </ul>
      </div>
      
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className = "logo-box">
             <img src ={Logo} className = "logo" alt = "logo"/>
          
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link> */}
            
          
            {isAuthenticated ? authLinks : guestLinks}
          </div>
      
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
