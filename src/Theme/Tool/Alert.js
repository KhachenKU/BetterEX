import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Example extends Component {
  render(){
    return (
      <div>
        <Alert color={this.props.color} style={{marginBottom:0}}>
          <h1 className="alert-heading">{this.props.header}</h1>
          <p>{this.props.content}</p>
        </Alert>
      </div>
    );
  }
}

export default Example;