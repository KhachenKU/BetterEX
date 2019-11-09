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
import {firebase} from '../../firebase';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      Hero: [],
      
    }
    this.toggle2 = this.toggle2.bind(this)
    //this.toggle3 = this.toggle3.bind(this)
  }
  toggle2=()=>{
    console.log()
    let y = firebase.database().ref('Product/').on('value', (data)=>{
      let Get = Object.keys(data.toJSON())
      let k = []
      console.log(Get)
      for(let i in Get){
        console.log(Get[i])
        let path = '/product/:'+Get[i]
        console.log(path)
        k.push(
          <Link to={path} >
              <DropdownItem>
                {Get[i]}
              </DropdownItem>
          </Link>
        )
      }
      this.setState({Hero:k})
    })
  }
  toggle=()=>{
    this.setState({isOpen: !this.state.isOpen});
  }

  fn=()=>{

  }
  
  render() {
    let txColor = this.props.txColor;
    let navItem1;
    let navItem2;
    if(this.props.ad){
      navItem1 = <NavItem><Link to="/edithomepage"><NavLink><div style={{color:txColor}}>Edit</div></NavLink></Link></NavItem>
      navItem2 = <NavItem><Link to="/generate"><NavLink><div style={{color:txColor}}>Generate</div></NavLink></Link></NavItem>
    } else if(this.props.us){
      navItem1 = <NavItem><Link to="/downloaduser"><NavLink><div style={{color:txColor}}>Download</div></NavLink></Link></NavItem>
      navItem2 = null
    } else {
      navItem1 = null
      navItem2 = null
    }


    return (
      <div>
        <Navbar color={this.props.bgcolor} light expand="md">
          <Link to='/'><NavbarBrand><div style={{color:txColor}}>{this.props.logo}</div></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {navItem1}
            {navItem2}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:txColor}} onClick={this.toggle2}>
                  Item list
                </DropdownToggle>
                <DropdownMenu right >
                  {this.state.Hero}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/login"><NavLink><div style={{color:txColor}}>{this.props.ad || this.props.us ? "logout" : "login"}</div></NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to="/"><NavLink><div style={{color:txColor}}>Search</div></NavLink></Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}