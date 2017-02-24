import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import data from '../data.js';
import FormField from './FormField.js';

class App extends Component {

constructor(){
  super()
    this.state = {

    }
}



  render() {
    console.log(data)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <FormField data={ data }/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
