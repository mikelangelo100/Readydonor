import React, { Component } from 'react';
import { getProfiles } from './fakeProfile'; 

class Profiles extends Component {
    state = { 
        profiles : getProfiles()
     };
    render() { 
        return ( 
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>bloodGroup</th>
        </tr>
        </thead>
        <tbody>
        {this.state.profiles.map(profile => (
      <tr>
        <td>{profile.title}</td>
        <td>{profile.bloodGroup}</td>
      </tr>))}
    </tbody>
    </table>
         );
    }
}
 
export default Profiles;
