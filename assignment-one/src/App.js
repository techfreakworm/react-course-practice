import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'


function App() {
  return (
    <div>
      <UserInput/>
      <UserOutput userName="Max"/>
      <UserOutput userName="Max"/>
      <UserOutput userName="Max"/>
    </div>
  );
}

export default App;
