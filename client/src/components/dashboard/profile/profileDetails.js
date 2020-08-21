import React, { Component} from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router,
     Switch, Route,  
     
     } from 'react-router-dom';
import Security from './Security'
import UserProfile from './UserProfile'
import Settings from './Settings'

class ProfileDetails extends Component {
    render() {
        

        return(
            <div className ="profile-wrapper">
                <div className="profile-picture-container">
                <h1 className="profile-header">Profile</h1>  
                    
                    <div className="profile-details">
                  
                     <svg width="120" height="120" className="user-logo-svg">
                        <defs>
                            <pattern id="image" patternUnits="userSpaceOnUse" height="100" width="100">
                            <image x="0" y="0" height="100" width="100" xlinkHref="https://readydonor.s3.us-east-2.amazonaws.com/me.jpg" />
                            </pattern>
                        </defs>
                        <circle stroke="#eeeeee" 
                            id='top' cx="60" 
                            cy="60" r="60"
                            fill="url(#image)"
                            stroke-width="4" 
                            
                            stroke-linecap="round"
                         
                         />
                    </svg>
                    </div>
                </div>
                <div className="profile-details-container">

                {/* Profile settings */}

                <div>
        <Router>
                       

        <Switch>
            <Route exact path="/profile">
                <UserProfile></UserProfile>
            </Route>
            <Route exact path="/profile/:settings" component={Settings}>
            </Route>
            <Route exact path="/profile/:security">
            <Security />
            </Route>
            </Switch>
        </Router>
                   
                </div>

                </div>

            </div>
        );
    }
}

  

ProfileDetails.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileDetails;




