import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginHospital } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';


import { Link } from 'react-router-dom';
import '../../css/pages/login.min.css';


class HospitalLogin extends Component {
  constructor() {
    super();
    this.state = {
      hospitalNumber: '',
      password: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard/hospital');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard/hospital');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      hospitalNumber: this.state.hospitalNumber,
      password: this.state.password
    };

    this.props.loginHospital(userData);
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
              
              
              <form onSubmit={this.onSubmit} className = "form">
             
                <TextFieldGroup
                  placeholder="Hospital number"
                  name="hospitalNumber"
                  type="number"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  className = "form__input"
                />
                <label for = "email" className = "form__label">Hospital Number</label>

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
                  <li className = "extra-items"><Link to ="/register/hospital" className = "extra-things">Create an account</Link></li>
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

HospitalLogin.propTypes = {
  loginHospital: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginHospital })(HospitalLogin);
