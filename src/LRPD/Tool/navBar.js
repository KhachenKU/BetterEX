import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let txColor = this.props.txColor;
    return (
      <div>
        <Navbar color={this.props.bgcolor} light expand="md">
          <Link to='/'><NavbarBrand><div style={{color:txColor}}>{this.props.logo}</div></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:txColor}}>
                  Item list
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    1
                  </DropdownItem>
                  <DropdownItem>
                    2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#"><div style={{color:txColor}}>{this.props.log}</div></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><div style={{color:txColor}}>Search</div></NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}