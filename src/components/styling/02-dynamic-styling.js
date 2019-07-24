import React, { Component } from 'react';
import Person from './Person';

// We are going to change a paragraph style depending on how many persons are we showing.
// When we start deleting Person, depending on the number of them, the paragraph
// will have a different set of styles.

class DynamicStyling extends Component {
  state = {
    persons: [
      { id:'asd', name: 'Max', age: 28 },
      { id:'qwe', name: 'Manu', age: 29 },
      { id:'zcx', name: 'John', age: 29 },
    ],
    showPersons: false,
    classes : []
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  handleDeletePerson = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons:persons})

    // Like this, we should manage when to take out from state (if we add elems)
    // Also, make push only if it was not already made. Becaus if for example
    // it is <= 10, each time we delete something less than 10, the class will be added.
    let c = [...this.state.classes]
    if (persons.length <= 2){
        this.setState({classes: c.concat('red')})
    }
    if (persons.length <= 1){
        this.setState({classes: c.concat('bold')})
    }
  }

  // red and bold are classes defined in App.css (or some another imported css)
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
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    // WAY 1
    const classes = []
    if (this.state.persons.length <= 2){
        classes.push('red')
    }
    if (this.state.persons.length <= 1){
        classes.push('bold')
    }

    // WAY 2
    const classes2 = this._handleClasses()
    
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

        style.backgroundColor = 'red'
    }

    return (
      <div className="App">
        <h1>Dynamic Styling</h1>
        <p className={classes.join(' ')}> Persons </p>  {/* WAY 1 */}
        <p className={classes2.join(' ')}> Persons </p> {/* WAY 2 */}
        <p className={this.state.classes.join(' ')}> Persons </p> {/* WAY 3 */}
        {/* And another imaginable way of assigning a string there is possible.
        From a fetch, from */}
        <button 
            style={style}
            onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default DynamicStyling;