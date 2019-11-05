import React, { Component } from 'react';
import {
  Card, CardImg
} from 'reactstrap';

class Example extends Component {
    render(){
      return (
        <div>
            <Card>
                <CardImg style={{padding:"50px"}}/>
            </Card>
        </div>
        );
    }
}

export default Example;