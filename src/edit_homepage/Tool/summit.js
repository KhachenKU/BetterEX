import React, { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios'

export default class Example extends React.Component {

  render() {
    return (
      <div>
        <Button color="success" style={{ height: 50 }} onClick={this.fileUploadHandler}> SUMMIT </Button>{' '}
      </div>

    );

  }
}

