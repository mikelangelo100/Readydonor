import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';


import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

import SearchTest from './Search/SearchTest'
//import  Search  from './Search/FlipSearch';
import DonateBlood from './donateBlood/donate'



// Material UI ICONS
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from '../../sass/img/logowhite.png';


import '../../css/dashboard/main.min.css';

class Sidebar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
    
    render() {
        const year = new Date();
        return(

     <div className="dashboard-content">
          <nav className= "sidebar">

            {/* Readydonor Logo */}
          <img src={Logo} alt="logo" className="readydonor-logo" /> 

            {/* User Account */}
            <ul className = "side-nav">
              <center className="profile-image">
                <i class="fas fa-user-circle "></i>
              </center>                
              <Select labelId="label" id="select" value="20" className="account-dropdown">
                  <li className="account">
                    <Link to="#" className="account-link">Account</Link>
                  </li>
                  <li className="account">
                  <Link to="#" className="account-link">Logout</Link>
                  </li>
            </Select>
            
             
              
               {/* Home Sidebar */}
              <li className ="side-nav__item">
              <Link to="/" className="side-nav__link navItem"> 
                <div className ="user-nav__icon-box">
                <DesktopMacIcon />
                <span className="side-nav__text">Home</span>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/profile" className="side-nav__link"> 
              <div className ="user-nav__icon-box">
                  <PersonIcon />
                <span className="side-nav__text">Profile</span>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/donate" component={DonateBlood} className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                  <PersonAddIcon />
                <span className="side-nav__text">Donate Blood</span>
               
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/search" className="side-nav__link" component={SearchTest}> 
                <div className ="user-nav__icon-box">
                 <SearchIcon />
                <span className="side-nav__text">Search for Blood</span>
                </div> 
            </Link>
            </li>
          
          
            <li className ="side-nav__item">
              <Link to="/" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                  <a href=""
                     className="logout"
                    onClick={this.onLogoutClick.bind(this)}>
                    <ExitToAppIcon />
                    <span className="side-nav__text">Log out</span>
                  </a>
              </div>
            </Link>
            </li>
          </ul>
            <div class = "legal"> 
              &copy; {year.getFullYear()} by Readydonor. All rights reserved
            </div>
          </nav>
    </div>
        );
    }
}





Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  
};

const mapStateToProps = state => ({

  auth: state.auth
});

export default connect(mapStateToProps, {  logoutUser, clearCurrentProfile })(
  Sidebar
);