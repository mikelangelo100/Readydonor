import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Link,Route, matchPath } from 'react-router-dom';
import Spinner from  '../../common/Spinner';
import { getCurrentProfile } from '../../../actions/profileActions'
import Sidebar from '../sidebar'
import ProfileDetails from './profileDetails'
import Security from './Security'
import UserProfile from './UserProfile'
import Settings from './Settings'

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }
  

    render() {
      const { profile, loading } = this.props.profile;
      let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className= "main-profile-wrapper">    
          <Sidebar className="profile-sidebar" />
          {/* <ProfileDetails profile={profile} className="profile-details-wrapper"/> */}
            <Router>
              <div className="user-profile">
                
              <div className="profile-details-form">       
              <MenuLink
              activeOnlyWhenExact={true}
              to='/profile/'
              label="Profile Details"
              className="profile-link"
            /></div> 
              <div className="profile-settings">
              <MenuLink
              to='/profile/settings'
              label="Settings"
            />
              </div>
              <div className="profile-security">
              <MenuLink
            
              to='/profile/security'
              label="Security"
            />
              </div>
            
          
            
            <Switch>
              <Route exact path='/profile'>
                <UserProfile 
                phonenumber="profile.phonenumber"
                />
              </Route>
           
              <Route exact path='/profile/settings' component={Settings}>
                <Settings />
              </Route >
              <Route exact path='/profile/security' component={Security}>
                <Security />
              </Route>
            
            </Switch>
           
            </div>   
           </Router>
          
        </div>

          );
    }
    return (
          <div className="main-profile-wrapper">
            <div>{profileContent}</div>
          </div>
        
            
 
    );
  }
}
function MenuLink ({ label, to, activeOnlyWhenExact }) {
  let match = matchPath ({
     path: to, 
     exact: activeOnlyWhenExact
  });
  return (
    <div className = {match ? "active" : ""}>
      {match && ""}
    <Link to={to}>{label}</Link>
    </div>
  )
}

MyProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(MyProfile);

