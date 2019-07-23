import React, { Component } from 'react'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'


class App extends Component {

  state = {
    username: 'superMax'
  }

  usernameChangedHandler = (event) => {
      this.setState({username: event.target.value})
  }

  render(){
    return (
      <div>
        <UserInput changed={this.usernameChangedHandler}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="Max"/>
      </div>
    );
  }
}

export default App;
