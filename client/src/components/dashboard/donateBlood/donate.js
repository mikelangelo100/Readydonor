import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sidebar from '../sidebar'
import SelectListGroup from '../../common/SelectListGroup';
import TextFieldGroup from '../../common/TextFieldGroup';
import {  getDiagnosis } from  '../../../actions/donationActions'

 class DonateBlood extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //symptomName: [],
    //selectedOption: '',
    gender: '',
    symptoms: '',
    year_of_birth: '',
    diagnosis: {},
    loading: false,
    latitude: '',
    longitude:'',
    searchText: '',
    isLoading: true,
    errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount() {
      axios.get('/api/donation/getSymptoms')
      .then(response => response.data.map(symptoms => ({
        ID: `${symptoms.ID}`,
        name: `${symptoms.Name}`
      }))
      )
      .then(symptoms => {
        this.setState({
          symptomName: symptoms,
          isLoading: false
        });
      })
         .catch(error => this.setState({ error, isLoading: false }));
};
     

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onSubmit(e) {
    e.preventDefault();
      fetch(`/api/donation/getMedicalConditions?symptomName=${this.state.symptoms}&gender=${this.state.gender}&year_of_birth=${this.state.year_of_birth}`)
      .then(res => res.json())
      .then(data => {
      
        this.setState({diagnosis : data,
        isLoading: false,
        },
        
        );
        this.props.history.push('/donate/result', this.state.diagnosis
        );
      })
      .catch(error => this.setState({error, isLoading: false}))
    
  //   const diagnosisParameters = {
  //     symptomName: this.state.symptomName,
  //     gender: this.state.gender,
  //     year_of_birth: this.state.year_of_birth,
     
  //   };

  //   this.props.getDiagnosis(diagnosisParameters, this.props.history);
   }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { errors, isLoading,symptomName } = this.state;
    const gender = [
      {label: '* Gender', value: 0},
      {label: 'Male', value : 'Male'},
      {label : 'Female', value : 'Female'}
    ];
    const symptoms =  [
      { ID: 10, Name: 'Abdominal pain' },
      { ID: 238, Name: 'Anxiety' },
      { ID: 104, Name: 'Back pain' },
     { ID: 75, Name: 'Burning eyes' },
     { ID: 46, Name: 'Burning in the throat' },
     { ID: 170, Name: 'Cheek swelling' },
     { ID: 17, Name: 'Chest pain' },
    { ID: 31, Name: 'Chest tightness' },
     { ID: 175, Name: 'Chills' },
     { ID: 139, Name: 'Cold sweats' },
   { ID: 15, Name: 'Cough' },
   { ID: 207, Name: 'Dizziness' },
    { ID: 244, Name: 'Drooping eyelid' },
     { ID: 273, Name: 'Dry eyes' },
      { ID: 87, Name: 'Earache' },
     { ID: 92, Name: 'Early satiety' },
     { ID: 287, Name: 'Eye pain' },
      { ID: 33, Name: 'Eye redness' },
     { ID: 153, Name: 'Fast, deepened breathing' },
      { ID: 76, Name: 'Feeling of foreign body in the eye' },
     { ID: 11, Name: 'Fever' },
     { ID: 57, Name: 'Going black before the eyes' },
      { ID: 9, Name: 'Headache' },
      { ID: 45, Name: 'Heartburn' },
     { ID: 122, Name: 'Hiccups' },
      { ID: 149, Name: 'Hot flushes' },
    { ID: 40, Name: 'Increased thirst' },
     { ID: 73, Name: 'Itching eyes' },
      { ID: 96, Name: 'Itching in the nose' },
      { ID: 35, Name: 'Lip swelling' },
      { ID: 235, Name: 'Memory gap' },
     { ID: 112, Name: 'Menstruation disorder' },
     { ID: 123, Name: 'Missed period' },
      { ID: 44, Name: 'Nausea' },
      { ID: 136, Name: 'Neck pain' },
     { ID: 114, Name: 'Nervousness' },
     { ID: 133, Name: 'Night cough' },
      { ID: 12, Name: 'Pain in the limbs' },
      { ID: 203, Name: 'Pain on swallowing' },
      { ID: 37, Name: 'Palpitations' },
      { ID: 140, Name: 'Paralysis' },
      { ID: 54, Name: 'Reduced appetite' },
      { ID: 14, Name: 'Runny nose' },
      { ID: 29, Name: 'Shortness of breath' },
      { ID: 124, Name: 'Skin rash' },
    { ID: 52, Name: 'Sleeplessness' },
      { ID: 95, Name: 'Sneezing' },
     { ID: 13, Name: 'Sore throat' },
      { ID: 64, Name: 'Sputum' },
      { ID: 179, Name: 'Stomach burning' },
      { ID: 28, Name: 'Stuffy nose' },
      { ID: 138, Name: 'Sweating' },
      { ID: 248, Name: 'Swollen glands in the armpits' },
      { ID: 169, Name: 'Swollen glands on the neck' },
     { ID: 211, Name: 'Tears' },
      { ID: 16, Name: 'Tiredness' },
      { ID: 115, Name: 'Tremor at rest' },
      { ID: 144, Name: 'Unconsciousness, short' },
      { ID: 101, Name: 'Vomiting' },
      { ID: 181, Name: 'Vomiting blood' },
      { ID: 56, Name: 'weakness' },
    { ID: 23, Name: 'Weight gain' },
      { ID: 30, Name: 'Wheezing' }
    ]
    // const selectoptions = symptomName.map(symptom => {
    //   const {ID, name} =symptom;
    //   return(
    //     <option key={ID}
    //       value={name}
    //     >
    //       {symptom.name}
    //     </option>
    //   );
    // })
    const SelectListSymptoms = ({ name, value, error, info, onChange, options }) => {
      const selectOptions = options.map(option => (
        <option key={option.ID} value={option.Name}>
          {option.Name}
        </option>
      ));
      return (
       
        <div className="form-group donatesym">
          <select
            className={classnames('form-control form__input', {
              'is-invalid': error
            })}
            name={name}
            value={value}
            onChange={onChange}
          >
            {selectOptions}
          </select>
          {info && <small className="form-info">{info}</small>}
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        
      );
    };
    return(
      
      
      <div>
        <Sidebar />
        <div className="donate-form-wrapper">   
          <div className="donation-talk">
            <h1 className="donation-talk-title">DONATE BLOOD</h1>
            <p className="donation-talk-subtitle">Is has been Scientifically proven that regular blood donationimproves the immune system and prevent disease occurence. Doctors advise</p> 
            
            <p className="donation-talk-subtitle">to donate Blood atleast Four times in a year. To crown it all, there's nothing more glorious than saving lives.</p>
            <p className="donation-talk-subtitle"></p>
            <p className="donation-talk-subtitle-2">Save a life by Donating Today.</p>
            <h2 className ="donation-talk-subtitle-3">Check your health status by using our health status checker below</h2>
           </div>
           <form onSubmit={this.onSubmit} encType = "multipart/form-data" className = "donate-form">
             
                <div>
                 
                  <SelectListSymptoms 
                    placeholder="Symptoms"
                    name="symptoms"
                    value={this.state.symptoms}
                    onChange={this.onChange}
                    options={symptoms}
                    
                  />
                </div>
                <div >
            
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={gender}
                  error={errors.gender}
                  info="Please select Gender"
                  
                />
                </div>
                <div >
                <TextFieldGroup
                  placeholder="year of birth"
                  name="year_of_birth"
                  value={this.state.year_of_birth}
                  onChange={this.onChange}
                  error={errors.year_of_birth}
                  info="Age"
                  
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

    );
  }
}


getDiagnosis.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  symptomName: state.symptomName,
  gender: state.gender,
  year_of_birth: state.year_of_birth,
  errors: state.errors
});

export default connect(mapStateToProps, { getDiagnosis })(
  withRouter(DonateBlood)
);