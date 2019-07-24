import React, { Component } from 'react';
import Person from './Person';
import Radium from 'radium'  // Import this line

// Radium let us use pseudo selectors and media querys with in-lin style

class RadiumStyling extends Component {
  state = {
    persons: [
      { id:'asd', name: 'Max', age: 28 },
      { id:'qwe', name: 'Manu', age: 29 },
      { id:'zcx', name: 'John', age: 29 },
    ],
    showPersons: false,
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  handleDeletePerson = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  _handleClasses(){
    const classes = []
    if (this.state.persons.length <= 2){
        classes.push('red')
    }
    if (this.state.persons.length <= 1){
        classes.push('bold')
    }
    return classes
  }

  render() {

    let persons = null;
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover' : {    // Ad any pseudo selector (as string!) and its properties
          backgroundColor: 'lightgreen',
          color: 'black'
        }   
    }

    const classes = this._handleClasses()
    
    if( this.state.showPersons ){
        persons = (
            <div>
                {this.state.persons.map( (person,index) => {
                  return (
                    <Person
                        clickDelete={this.handleDeletePerson.bind(this,index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                    />
                  )
                })
                }
            </div>
        );

        style.backgroundColor = 'Crimson'
        style[':hover'] = {    // Acces like this, because it is a string. We cant use dot notation
          backgroundColor: 'Tomato',
          color: 'black'
        }  
    }

    return (
      <div className="App">
        <h1>Dynamic Styling</h1>
        <p className={classes.join(' ')}> Persons </p>
        <button 
            style={style}
            onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(RadiumStyling); // Wrap exported app. High order component