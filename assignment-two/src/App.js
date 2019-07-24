import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  render(){
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
      </div>
    );
  }
}

export default App;
