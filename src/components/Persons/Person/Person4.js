import React from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClassFunc'

const person = props => {
  // console.log('[Person.js] rendering...');
  return (
    <Aux>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

// React will watch for this in DEV mode and give you a warning if it fails to check the type
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

// export default person;
export default withClass(person, classes.Person);
