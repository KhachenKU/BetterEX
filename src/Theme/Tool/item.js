import {DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {firebase } from '../../firebase'
export default class ProductForm extends Component {
  constructor( props ){
    super(props);
    this.state = { 
      Hero: []
    };
    

  }
  render(){
      return(
    <div>{this.state.Hero}</div>
    )
  }
}