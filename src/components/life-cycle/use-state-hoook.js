import React, { useState } from 'react';
import Person from '../Persons/Person/Person';

// useState returns a state and a function to update

// IMPORTANT NOTE: Update function do not merge state, it replaces it. So when updating
// we have to merge manually.
// The Solution is not to have one big state or object state, if not several and use 
// useState several times.

// For example: We have two portions of state, one with the object with persons key, and an 
// array. We can declare useState with whatever we eant inside, a string, an object, bool, etc
// Then to update each state, we use the correspondant function for that state, setPersonState, 
// setArrayState, etc, etc, etc..


const StateHook = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default StateHook;
