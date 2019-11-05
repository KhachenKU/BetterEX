import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import './Tool.css'
import { Link } from 'react-router-dom';

class editMenu extends Component {
  render(){
    let color = this.props.bgcolor;
    // edit theme page
    if (this.props.page === "theme") {
      return (
        <center className = "BGeditMenu" style={{padding: "0.5cm"}}>
          <Link to='/edithomepage'><Button outline color={color} className="button">Homepage</Button></Link>
          <Button outline color={color} className="button">Product</Button>
          <Button outline color={color} className="button">User</Button>
          <Link to='/edittheme'><Button color={color} className="button">Theme</Button></Link>
        </center>
      );
    }
    else if (this.props.page === "homepage") {
      return (
        <center className = "BGeditMenu" style={{padding: "0.5cm"}}>
          <Button color={color} className="button">Homepage</Button>
          <Button outline color={color} className="button">Product</Button>
          <Button outline color={color} className="button">User</Button>
          <Link to='/edittheme'><Button outline color={color} className="button">Theme</Button></Link>
        </center>
      );
    }
    else if (this.props.page === "product") {
      return (
        <center className = "BGeditMenu" style={{padding: "0.5cm"}}>
          <Button outline color={color} className="button">Homepage</Button>
          <Button color={color} className="button">Product</Button>
          <Button outline color={color} className="button">User</Button>
          <Link to='/edittheme'><Button outline color={color} className="button">Theme</Button></Link>
        </center>
      );
    }
    else if (this.props.page === "user") {
      return (
        <center className = "BGeditMenu" style={{padding: "0.5cm"}}>
          <Button outline color={color} className="button">Homepage</Button>
          <Button outline color={color} className="button">Product</Button>
          <Button color={color} className="button">User</Button>
          <Link to='/edittheme'><Button outline color={color} className="button">Theme</Button></Link>
        </center>
      );
    }
  }
}

export default editMenu;
