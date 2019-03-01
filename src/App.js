import React, { Component } from 'react';
import * as firebase from 'firebase';
import './intro.css';
import Nav from './navbar.js';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTGaL_XbJrENacVsztsH32FWkI-4v9GUQ",
  authDomain: "bookstation-90833.firebaseapp.com",
  databaseURL: "https://bookstation-90833.firebaseio.com",
  projectId: "bookstation-90833",
  storageBucket: "bookstation-90833.appspot.com",
  messagingSenderId: "1030883595078"
};
firebase.initializeApp(config);  

const fire = firebase;
console.log(fire)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:false
    }
    firebase.auth().onAuthStateChanged(u=>{
      let u1=false;
      u?
        u1 = u && console.log('aa')
        : u1 = false && firebase.auth().createUserWithEmailAndPassword('ahmed@gmail.com','123456').then(u=>{
          u.updateProfile({
            displayName:'ahmed'
          })
        })
        this.state.user = u1;
        console.log(u1)
    })
  }
  render() {
    return (
      <Nav/>
    // <h1>{this.state.user.displayName}{true?<h2>2</h2>: <h3>3</h3>}</h1>
    );
  }
}

export default App;
