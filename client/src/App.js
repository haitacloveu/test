import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var axios = require('axios');

class App extends Component {

  constructor() {
    super();
    this.state = {
      infoUser: {}
    }
  }

  componentDidMount() {
    axios.get('/getInfo')
    .then(res => res.data)
    .then(infoUser => this.setState({infoUser}, () => console.log('Info fetched', infoUser)));
    //  fetch('/getInfo')
    // .then(res => res.json())
    // .then(infoUser => this.setState({infoUser}, () => console.log('Info fetched', infoUser)));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <h2>User Info</h2>
          <b>FirstName:</b> {this.state.infoUser.firstName}<br/>
          <b>LastName:</b> {this.state.infoUser.lastName}<br/>
          <b>Age:</b> {this.state.infoUser.age}
        </p>
      </div>
    );
  }
}

export default App;
