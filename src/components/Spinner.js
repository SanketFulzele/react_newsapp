import React, { Component } from 'react'
import loading1 from "./loading3.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading1} alt="loading" style={{width: "80px", margin: "100px"}}/>
      </div>
    )
  }
}

export default Spinner;

