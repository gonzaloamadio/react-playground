import React from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClassFunc'

const person = props => {
  console.log('[Person.js] rendering...');
  return (
    // <div className={classes.Person}>
    <Aux>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
    // </div>
  );
};

// export default person;
export default withClass(person, classes.Person);
