import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Avatar from '../../sass/img/avatar-form.png';
import '../../css/dashboard/main.min.css';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
                  placeholder="Full Name"
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <label for = "fullname" className = "form__label">Enter Full name</label>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"                
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}

                />
                <label for = "email" className = "form__label">Enter Email Address</label>
                <TextFieldGroup
                  placeholder="Password"
                  name="password"                  
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <label for = "password" className = "form__label">Enter your password</label>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
