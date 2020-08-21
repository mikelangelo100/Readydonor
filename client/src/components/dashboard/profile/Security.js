import React, { Component } from 'react'

class Security extends Component {
    render(){
        return(
            
                <form className="profile-form">
                    <h1>Show Blood group</h1>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">No</label>
                    </div>

                </form>
            
        );
    }
}

export default Security