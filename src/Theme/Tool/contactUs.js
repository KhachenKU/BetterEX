import React from 'react';
import { Component } from 'react';
import Alert from './Alert';

class contactUs extends Component {
  render(){
    let color = this.props.bgcolor;
    return (
      <div>
        <Alert header="Contact Us / About us" content="I LOVE BEEF AND SASHIMI" color={color}/>
      </div>
    );
  }
}

export default contactUs;