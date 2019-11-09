import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../Theme/Tool/Tool.css';
import ProductForm from './ProductForm';
import Delete from './Delete';
import './Form.css';
class Form extends Component {
  constructor( props ){
    super(props);
    this.state = { St : 1 };
    this.toggleDiv = this.toggleDiv.bind(this)
  }
  toggleDiv = (choice)=>{
    this.setState({St : choice}) ;
  }
  render(){
    let bgcolor = this.props.bgcolor;
    return (
      <div>
        <div className = "Selected_box">
          <div className = "Selected">
              <div className = "Selected-GButton" outline color={bgcolor}>
                  <Button color = {this.state.St === 1 && bgcolor} className = "Selected-Button" onClick={() => this.toggleDiv(1)} >
                      Add
                  </Button>
                  <Button color = {this.state.St === 2 && bgcolor} className = "Selected-Button2" onClick={() => this.toggleDiv(2)} >
                      Delete
                  </Button>
              </div>
          </div>
        </div>
        {this.state.St === 1 && <ProductForm bgcolor={bgcolor}/>}
        {this.state.St === 2 && <Delete bgcolor={bgcolor}/>}
        <center>
        
        </center>
        <br/>
      </div>
    );
  }
}

export default Form;