import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  };

  nameChangedHandler = (event) => {
    this.setState({
        persons: [
          { id:'123', name: "Max", age: 28 },
          { id:'sdf3', name: event.target.value, age: 29 },
          { id:'dfg3', name: 'Stephanie', age: 27 }
        ]
      });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border:' 1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
              return (
                <Person 
                key={person.name}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                />
              );
            })}
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            /> */}
          </div>
        );
      }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
        onClick={this.togglePersonHandler}
        >Toggle Persons</button>
        {persons} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
