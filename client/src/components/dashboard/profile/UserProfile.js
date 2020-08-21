import React, { Component } from 'react'

class UserProfile extends Component {


    render(){
       const { phoneNumber } = this.props.phonenumber;
        return(
                <form className="profile-form">
                    <div className="first-row">
                        <div className="emailaddress">
                             <label for="inputMail" className="email">Email</label>
                            <input type="email" className="input-width" id="inputEmail4"  />
                        </div>
                        <div className="emailaddress">
                            <label for="inputPassword4" className="email">Phone Number</label>
                           <input type="text" className="input-width" id="inputPassword4" >{phoneNumber}</input> 
                        </div>
                    </div>
                    <div className="first-row">
                        <div className="emailaddress">
                                <label for="inputAddress" className="email">Address</label>
                                <input type="text" className="input-width" id="inputAddress"  />
                        </div>
                        <div className="emailaddress">
                                <label for="inputAddress2" className="email">Address 2</label>
                                <input type="text" className="input-width" id="inputAddress2"  />
                        </div>
                    </div>
                    <div className="first-row">
                        <div className="emailaddress">
                            <label for="inputCity" className="email">City</label>
                            <input type="text" className="input-width" id="inputCity" />
                        </div>
                       
                        <div className="emailaddress" className="email">
                            <label for="inputZip">Zip Code</label>
                            <input type="text" className="input-width"  />
                        </div>
                    </div>
                    
                   
                    </form>
            
        );
    }
}


export default UserProfile;
  