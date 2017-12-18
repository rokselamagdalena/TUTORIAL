import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (

      <div className='UserOutput'>
          <p>Some random text</p>
          <p> {props.userName} :) </p>
      </div>
  )

};

export default userOutput;
