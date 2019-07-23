import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [ personsState, setPersonState ] = useState({
        persons: [
            {
                name: 'Max',
                age: 28
            },
            {
                name: 'Manu',
                age: 29
            },
            {
                name: 'Stephanie',
                age: 26
            }
        ]
    })
    
    
    const switchNameHandler = () => {

        setPersonState({persons: [
            {
                name: 'Mayank',
                age: 28
            },
            {
                name: 'Manu',
                age: 29
            },
            {
                name: 'Stephanie',
                age: 27
            }
        ]})
    }
    
    
    return (
        <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
        );
        // return React.createElement('div', { className: 'App' }, '', React.createElement('h1', null, 'Does this work?'));
        
    }
    
    
    
    
    
    
    export default app;