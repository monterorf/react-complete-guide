import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 45},
      {name: 'Manu', age: 30},
      {name: 'Stephanie', age: 20},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 30},
        {name: 'Steph', age: 20},
      ],
      showPersons: false
    } )
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons:[
        {name: 'Max', age: 50},
        {name: event.target.value, age: 30},
        {name: 'Steph', age: 26},
      ]
    } )
  }

  render() {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1x solid blue',
  padding: '8px',
  curson: 'pointer'
};

    let persons = null;

    if(this.state.showPersons){
      persons = (
                    <div >
                      {this.state.persons.map(person => {
                        return <Person name={person.name} age={person.age}/>  
                      })}                    
                </div> 
                )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toogle persons</button>      
        {persons}
      </div>
    );
  }
}

export default App;
 