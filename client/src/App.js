import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { ToastContainer, toast } from 'react-toastify'



import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

//import Navbar from './components/layout/Navbar';

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import HospitalLogin from './components/auth/HospitalLogin';
import HospitalRegister from './components/auth/HospitalRegister';
import Dashboard from './components/dashboard/Dashboard';
import FAQs from './components/layout/Faq';
import CreateProfile from './components/create-profile/CreateProfile';
import NewFileUpload from './components/create-profile/profileImg';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
//import AddEducation from './components/add-credentials/AddEducation';
import BloodSearch from './components/dashboard/Search/SearchTable';
import DonateBlood from './components/dashboard/donateBlood/donate'
import MyProfile from './components/dashboard/profile/profile'

import Profiles from './components/profiles/Profiles';
//import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile'
import Settings from './components/dashboard/profile/Settings'
import Security from './components/dashboard/profile/Security'
import DiagnosisResult from './components/dashboard/donateBlood/DiagnosisResult'
import './css/main.min.css';
import 'react-toastify/dist/ReactToastify.css'

//import icons styles
import './styles/fonts/linea-basic-10.ttf';
import './styles/styles.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        
        
        <Router>
          <div className="App">
          <ToastContainer />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/register/hospital" component={HospitalRegister} />
              <Route exact path="/login/hospital" component={HospitalLogin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/faqs" component={FAQs} />
             
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/donate/result" component={DiagnosisResult} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute 
                 exact
                 path = "/file-upload"
                 component={NewFileUpload}
              />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                </Switch>
                <Switch>
                <PrivateRoute
                  exact
                  path="/donate"
                  component={DonateBlood}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/search"
                  component={BloodSearch}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact 
                  path="/profile" 
                  component={MyProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact 
                  path="/profile/settings" 
                  component={Settings}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact 
                  path="/profile/security" 
                  component={Security}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
