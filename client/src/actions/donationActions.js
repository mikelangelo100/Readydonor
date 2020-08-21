import axios from 'axios';

import {
    GET_SYMPTOMS,
    GET_DIAGNOSIS,
  
    PROFILE_LOADING,
    GET_NEARBYDOCTORS,
   
    SEARCH_TEXT,
    GET_ERRORS,
    SEARCH_BLOOD

} from './types';

// Get user symptoms
export const getSymptoms = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/donate/getSymptoms')
    .then(res =>
      dispatch({
        type: GET_SYMPTOMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SYMPTOMS,
        payload: {}
      })
    );
};

// Get medical diagnosis
export const getDiagnosis = (diagnosisParameters, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`api/donation/getMedicalConditions`, diagnosisParameters)
    .then(res => history.push('/diagnosisResult'))
     .catch(err => 
       dispatch({
        type: GET_DIAGNOSIS,
        payload: err.response.data
      })
     );
    };


export const getNearbyDoctors = () => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`api/donate/nearbyDoctors`)
      .then(res =>
        dispatch({
          type: GET_NEARBYDOCTORS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_NEARBYDOCTORS,
          payload: null
        })
      );
  };


 export const symptomsText = searchText => dispatch => {
    axios
      .post('/api/donate/trackSymptoms', searchText)
      .then(res => 
        dispatch({
            type: SEARCH_TEXT,
            payload: res.data
        })
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  export const searchBlood = bloodGroup => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`/api/profile/all`, bloodGroup)
      .then(res => 
        dispatch({
          type: SEARCH_BLOOD,
          payload: res.data
        }))
      .catch(err =>
        dispatch({
        type: GET_ERRORS,
        payload: err.response.data})
      );
  };

  
// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

