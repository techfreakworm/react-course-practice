import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div class="App">
              <h1>Hi I'm a react app</h1>
              <p>This is really working</p>
            </div>
          );
        // return React.createElement('div', { className: 'App' }, '', React.createElement('h1', null, 'Does this work?'));
    }
}



export default App;