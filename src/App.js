import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton  = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }`;
class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 45},
      {id: 'asfa2',name: 'Manu', age: 30},
      {id: 'asfa3',name: 'Stephanie', age: 20},
    ]
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})

    


  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
                    <div >
                      {this.state.persons.map((person,index) => {
                        return <Person 
                          click={() => this.deletePersonHandler(index)}
                          name={person.name} 
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event,person.id)} />  
                      })}                    
                </div> 
                )
        
    
    }

    let classes = [];
    

    if(this.state.persons.length <= 2){
        classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working! </p>
        <StyledButton 
        alt = {this.state.showPersons}
        onClick={this.togglePersonsHandler}>
          Toogle persons</StyledButton>      
        {persons}
      </div>
    );
  }
}

export default App;
 