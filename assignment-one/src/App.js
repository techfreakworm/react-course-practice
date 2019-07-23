import React, { Component } from 'react'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'


class App extends Component {

  state = {
    userName: 'superMax'
  }

  render(){
    return (
      <div>
        <UserInput/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="Max"/>
      </div>
    );
  }
}

export default App;
