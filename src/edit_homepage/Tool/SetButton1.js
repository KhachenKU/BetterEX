import { Button } from 'reactstrap';
//import './SetButton1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const SetButton1 = (props) => {
  const [rSelected, setRSelected] = useState(null);
  return (
    <center>
      <div className="SetButton1" >
        <Button outline color="secondary" className="App-Button" onClick={() => setRSelected(1)} active={rSelected === 1}>
          <h4>Homepage</h4>
        </Button>
        <Button outline color="secondary" className="App-Button" onClick={() => setRSelected(2)} active={rSelected === 2}>
          <h4>Product</h4>
        </Button>
        <Button outline color="secondary" className="App-Button" onClick={() => setRSelected(3)} active={rSelected === 3}>
          <h4>User</h4>
        </Button>
        <Button outline color="secondary" className="App-Button" onClick={() => setRSelected(3)} active={rSelected === 4}>
          <h4>Theme</h4>
        </Button>
      </div>
    </center>
  );
}
export default SetButton1;