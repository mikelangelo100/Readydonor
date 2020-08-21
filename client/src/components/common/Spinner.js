import React from 'react';
import spinner from '../../sass/img/spinner.gif';


export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '200px',
         margin: 'auto', 
         display: 'block', 
         position : 'relative',
         top: '200px',
         left: '400px'

        }}
        alt="Loading..."
      />
    </div>
      
  );
};
