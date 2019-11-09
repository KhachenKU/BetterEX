import React, { useReducer } from "react" ;
import loginImg from "../../../LRPD/login.svg" ;
import { auth } from '../../firebase/index' ;
import { useDispatch } from 'react-redux' ;
import {db} from '../../../../src/firebase';
import { changeUserStateLogin, changeAdminStateLogin, changeUserStateLogout, changeAdminStateLogout } from '../../../actions' ;

var admin_state = -1 ;
var user_state = -1 ;

var admin_state = null
var user_state = null

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: '',
      // dataEmailAdmin : ["asdf@hotmail.com", "hero@hotmail.com"],
      // dataEmailUser : ["user1@hotmail.com"]
      dataEmailAdmin : [],
      dataEmailUser : []
    }
    // this.onConfirmClick = this.onConfirmClick.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }


  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    // TODO: implement signInWithEmailAndPassword()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user,
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }
  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null,
        email:'',
        password:''
      })
      user_state = -1
      admin_state = -1
      this.onConfirmClick()
    })
  }

  onConfirmClick = () => {
    var order = null
    console.log(this.state.email)
    console.log(admin_state + " , " + user_state)
    // admin login
    if (admin_state != -1 && user_state == -1) {
      console.log(111)
      order = 1
    }
    // logout
    else if (admin_state == -1 && user_state == -1) {
      console.log(222)
      order = 2
    // user login
    } else if (admin_state == -1 && user_state != -1) {
      console.log(333)
      order = 3
    }
    console.log(order)
    this.props.ufo(order)
  }

  

  render() {
    const { message, currentUser } = this.state
    db.collection('Members').get().then(docs => {
      docs.forEach(doc => {
              if(doc.data().rank === 'admin'){
                this.state.dataEmailAdmin.push(doc.data().email)
              }
              else if(doc.data().rank === 'user'){
                this.state.dataEmailUser.push(doc.data().email)
              }
          }
      )
})

    if (currentUser) {
      console.log(currentUser)
      admin_state = this.state.dataEmailAdmin.indexOf(currentUser.email)
      user_state = this.state.dataEmailUser.indexOf(currentUser.email)

      this.onConfirmClick()
      if (admin_state != -1 || this.props.ad) {
        
        return (
          <div>
            <p>Hello {currentUser.email}</p>
            <p>Hello Admin</p>
            <button onClick={this.logout}>Logout</button>

          </div>
        )
      }

      else if (user_state != -1 || this.props.us) {
        
        return (
          <div>
            <p>Hello {currentUser.email}</p>
            <p>Hello User</p>
            <button onClick={this.logout}>Logout</button>

          </div>
        )
      }
    }

    return (
      <div className="base-container" >
        <label className="header">Login</label>
        <div className="image">
          <img src={loginImg} />
        </div>
        <form id="input" onSubmit={this.onSubmit}>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" name="email" placeholder="email" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" name="password" placeholder="password" onChange={this.onChange} />
              </div>
            </div>
          </div>
          {message ? <p className="help is-danger">{message}</p> : null}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control" >
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}