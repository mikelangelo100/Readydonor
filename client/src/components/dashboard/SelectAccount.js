import React, { Component } from 'react'

import SelectListGroup from '../common/SelectListGroup'
import { createProfile } from '../../actions/profileActions'

export default class SelectAccount extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selectAccount : ''
        }
    }
   onSubmit(e) {
       e.preventDefault()

       const selectedAccount = {
           selectAccount: selectAccount

       }; 
       this.props.createProfile(selectedAccount, this.props.history);

    }
    onChange(e) {
        this.setState(
            { [e.target.name] : e.target.value }
        )
    }
    render(){
        const options = [
            { label : " Select Account Type", value : 0},
            { label: "Individual", value: "Individual"},
            { label: "Hospitals", value : "Hospitals"},
            {label: "Blood Bank", value: "Blood Bank"}
        ]
        return(
            <div> 
                <h2>Select Account</h2>
                <form onSubmit={this.onSubmit}>
                <SelectListGroup  
                    placeholder = "Select Account Type"
                    value={this.state.selectAccount}
                    onChange={this.onChange}
                    options={selectAccount}
                    
                />
                </form>
            </div>);   
        }
}

createProfile.propTypes = {
    selected
}