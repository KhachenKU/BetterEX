import React from 'react';
import './App.css';
import NavBar from '../Theme/Tool/navBar'
import Promotion from './promotion/promotion'
import Media from './media/media'
import { db } from '../firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mission: 'Hello',
      Contact: 'Hello'
    }
  }

  

  render() {
    db.collection('Promotion').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        if(doc.id == 1){
          this.setState({Mission: doc.data().Link})
        }
        if(doc.id == 2){
          this.setState({Contact: doc.data().Link})
        }
      })
    })


    return (
      <div>
        
        <div className='promo'><Promotion s1 = {this.state.Mission}/></div>
        {/* <div className = 'tabs'><Tabs /></div> */}
        <div className='tabs'><Media /></div>
        <div className='contact' >{this.state.Mission}</div>
        <div className='contact'>{this.state.Contact}</div>
      </div>
    );
  }
}

export default App;
