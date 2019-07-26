import React, { Component } from 'react';
import Person from './Person2';
import styles from '../../containers/App.css'

// Radium let us use pseudo selectors and media querys with in-lin style

class CssModulesStyling extends Component {
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
        classes.push(styles.red)
    }
    if (this.state.persons.length <= 1){
        classes.push(styles.bold)
    }
    return classes
  }

  render() {

    let persons = null;
    let btnClass = '';

    // const style = {   // We do not need this, we'll do it css modules way
    //  ...
    // }

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

        btnClass = styles.Red;
    }

    return (
      <div className="App">
        <h1>Dynamic Styling</h1>
        <p className={classes.join(' ')}> Persons </p>
        <button 
            // style={style} We do not need this, (despite we can) we'll do it css modules way 
            className={btnClass}
            onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default CssModulesStyling;