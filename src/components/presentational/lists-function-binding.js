import React, { Component } from 'react';
import Person from '../Persons/Person/Person2';


class ListsBinding extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'qwe', name: 'Manu', age: 29 },
    ],
    showPersons: false
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  handleDeletePerson = (personIndex) => {
    // THIS IS A BAD IDEA. As persons is a pointer, we are mutating the original data
    // with splice. And this can lead to unpredictable apps
    // const persons = this.state.persons // pointer
    
    // THE WAY: this two are equivalent. But spread operator (...) is the modern way
    // We whould always update in an unmutable fashion, i.e not updating the original data
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]

    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  nameChangeHandler = (event, personId) => {
      const personIndex = this.state.persons.findIndex(per => {
        return per.id === personId
      })
      // Create a copy of the person
      const person = {...this.state.persons[personIndex]}
      // Alternative way
      // const person = Object.assign({}, this.state.person[personIndex])

      person.name = event.target.value

      // Create a copy of the person value of the sate (between [] and not {} to preserve type)
      const persons = [...this.state.persons]
      persons[personIndex] = person
      this.setState({persons:persons})
  }

  render() {

    let persons = null;

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
                //   This anonym function is the one executed on the onChange
                // Thats why it receives the event object
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  />
                )
              })
              }
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Lists</h1>
        <button onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default ListsBinding;
