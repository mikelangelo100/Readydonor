import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
//import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';


import '../../sass/dashboard/main.scss';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      gender: '',
      age: '',
      phonenumber: '', 
      bloodGroup: '',
      city: '',
      contact:'',
      bio: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      age: this.state.age,
      gender: this.state.gender,
      city: this.state.city,
      bloodGroup: this.state.bloodGroup,
      phonenumber: this.state.phonenumber,
      contact: this.state.contact,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status
    const options = [
      { label: '* Select Blood group', value: 0 },
      { label: 'A+', value: 'A+' },
      { label: 'A-', value: 'A-' },
      { label: 'B+', value: 'B+' },
      { label: 'AB+', value: 'AB+' },
      { label: 'AB-', value: 'AB-' },
      { label: 'O+', value: 'O+' },
      { label: 'O-', value: 'O-' },
      { label: 'Not sure', value: 'Not sure' }
    ];
    const gender = [
      {label: '* Gender', value: 0},
      {label: 'Male', value : 'Male'},
      {label : 'Female', value : 'Female'}
    ];

    return (
      <div className = "create-profile__body">        
       <div className="container-wrapper">
          <div className="header-content">
              <h1 className="header-content__profile">Create Your Profile</h1>
              <p className="header-content__text">
                Let's get some information to about you to build your profile
              </p>
          </div>
          <div className= "">
              <small className="required">* = required fields</small>
              <form onSubmit={this.onSubmit} encType = "multipart/form-data" className = "form-content">
             
                <div className = "form-content__fullname">
                <TextFieldGroup
                  placeholder="* Full name"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique profile name for your profile."
                  
                />
                </div> 
                <div className = "form-content__gender">
                {/* <TextFieldGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  error={errors.gender}
                  info="Male or Female"
                  
                /> */}
                
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={gender}
                  error={errors.status}
                  info="Please select Gender"
                  
                />
                </div>
                <div className = "form-content__age">
                <TextFieldGroup
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={errors.age}
                  info="Age"
                  
                />
              </div>
              <div   className = "form-content__phone">
                <TextFieldGroup
                  placeholder="Phone Number"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.onChange}
                  error={errors.phonenumber}
                  info="Enter your Phone number"
                
                />
                </div>
                
                <div className = "form-content__bloodgroup">
                <SelectListGroup
                  placeholder="Blood group"
                  name="bloodGroup"
                  value={this.state.bloodGroup}
                  onChange={this.onChange}
                  options={options}
                  error={errors.bloodGroup}
                  info="Please select your Blood group"
                  
                />
                </div>
              
                
                <div  className = "form-content__state">
                <TextFieldGroup
                  placeholder="State"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                  error={errors.city}
                  info="City or city & state suggested (eg. Lagos, Nigeria)"
                 
                />
                </div>
                
               
                <div className = "form-content__contact">
                <TextFieldGroup
                  placeholder="Contact Address"
                  name="contact"
                  value={this.state.contact}
                  onChange={this.onChange}
                  error={errors.contact}
                  info="Your contact address"
                
                />
                
                </div>
               
                <div className ="form-content__bio">
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                  
                />
                
                </div>
                
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />

              </form>
            </div>
            </div>
          
        
            </div>

    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
