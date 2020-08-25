import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../sass/img/logowhite.png';

export default () => {
  return (
    <React.Fragment>
      <footer className="footer">
            <div className="footer__logo-box">

                <picture className="footer__logo">
              
                    <img alt="Full logo" src= {Logo} />
                </picture>


                
            </div>
            
        </footer>


    </React.Fragment>
)}
  