import React from 'react';

import Person2 from './Person2';

const persons = props => {
  return props.persons.map((person, index) => {
    return (
      <div>
        <Person2
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => props.changed(event, person.id)}
        />
      </div>  
    );
  });
};

export default persons;
