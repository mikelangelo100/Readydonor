import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

import Avatar from '../../sass/img/avatar-form.png';
import { Link } from 'react-router-dom';
import '../../css/pages/login.min.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login-container">
        <div className="">
          <div className="">
            <div className="login-box">
              <h1 className="login-text">Log In</h1>
              <img src = {Avatar} alt='form-image' className = "avatar-form" />
              
              <form onSubmit={this.onSubmit} className = "form">
             
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  className = "form__input"
                />
                <label for = "email" className = "form__label">Email Address</label>

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                  className = "form__input"
                />
                <label for ="password" className = "form__label">Password</label>
                <input type="submit" className="submit" />
                
               
                
              </form>
              <div>
                <ul className = "extra-lists">
                  <li className = "extra-items"><Link to ="/register" className = "extra-things">Create an account</Link></li>
                  <li className = "extra-items"><Link to ="#" className = "extra-things">Forget password?</Link></li>
                </ul>
              
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
