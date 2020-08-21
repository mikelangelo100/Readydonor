import React, { Component } from 'react';
import Rodal from 'rodal';
import SearchImage from '../../img/search-blood-02.svg'
import SearchIcon from '../../img/searchicon-02.svg'

// include styles
import 'rodal/lib/rodal.css';

export default class QuickActionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)} className="donate-button">
        <img src={SearchIcon} className="donate-icon" />

            <h2 className="donate-icon-text">Search</h2>
        </button>
      

        <Rodal 
        visible={this.state.visible} 
        onClose={this.hide.bind(this)}
        width={500}
        height={800}
        animation="slideRight"
       
       
        >
          <div>
            <h2 className="dialog-title">Search for Blood</h2>
            <img src={SearchImage} />
            <p className="dialog-description">Search for Blood is feature
            that enable you to search for donors on this platform
            whenever you are in urgent need for blood.</p>
              <button className="dialog-btn"><a href="/search" className="dialog-btn-link">Search for blood</a></button>
          </div>
        </Rodal>
      </div>
    );
  }
}
