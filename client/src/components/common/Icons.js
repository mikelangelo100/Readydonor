import React, { Component } from 'react';
import icons from '../../img/icons.svg';

const Icons= props => {
    return (
        <svg
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             className={`icon icon-${props.name}`}        
        >
            <use xlinkHref={`${icons}#${props.name}`} />
        </svg>
    );

}
  
 
export default Icons;