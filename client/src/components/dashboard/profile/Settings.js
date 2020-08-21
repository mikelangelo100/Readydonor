import React, { Component } from 'react'

class Settings extends Component {
    render(){
        return(
            
               <form className="profile-form">
                         <div class="form-group">
                            <label for="formGroupExampleInput">Old password</label>
                            <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Old password" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">New password</label>
                            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="New Password" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Confirm new password</label>
                            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm new Password" />
                        </div>
                </form>
        
        );
    }
}

export default Settings;