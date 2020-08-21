import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerHospital } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Avatar from '../../sass/img/avatar-form.png';
import '../../css/dashboard/main.min.css';


class HospitalRegister extends Component {
  constructor() {
    super();
    this.state = {
      hospitalName: '',
      hospitalNumber: '',
      hospitalEmail: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard/hospital');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = { 
      hospitalName: this.state.hospitalName,
      hospitalNumber: this.state.hospitalNumber,
      hospitalEmail: this.state.hospitalEmail,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerHospital(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="">
      <div className="login-container">
        <div className="login-box">
        <img src = {Avatar} alt='form-image' className = "avatar-form" />
          
            <div className="u-margin-bottom-medium">
              <h1 className="reg">Sign Up</h1>
            </div>
              
              <form noValidate onSubmit={this.onSubmit} className = "form">
                <div className = "reg-control">
                 <TextFieldGroup
                  placeholder="Hospital Number"
                  name="hospitalNumber"
                  type="number"
                  value={this.state.hospitalNumber} 
                  onChange={this.onChange}
                  error={errors.hospitalNumber}
                />
                <label for = "Hospital Name" className = "form__label">Enter Hospital Name</label>
                <TextFieldGroup
                  placeholder="Hospital Name"
                  name="hospitalName"
                  type="name"                
                  value={this.state.hospitalName}
                  onChange={this.onChange}
                  error={errors.hospitalName}

                />
                <label for = "email" className = "form__label">Enter Hospital Email Address</label>
                <TextFieldGroup
                  placeholder="Hospital Email"
                  name="hospitalEmail"                  
                  type="email"
                  value={this.state.hospitalEmail}
                  onChange={this.onChange}
                  error={errors.hospitalEmail}
                />
                 <label for = "password" className = "form__label">Enter your Password</label>
                <TextFieldGroup
                  placeholder="password"
                  name="password"                  
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
              
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <label for = "password2" className = "form__label">Confirm your password</label>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </div>
              </form>
           
          
        </div>
      </div>
    </section>
    );
  }
}

HospitalRegister.propTypes = {
  registerHospital: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerHospital })(withRouter(HospitalRegister));
