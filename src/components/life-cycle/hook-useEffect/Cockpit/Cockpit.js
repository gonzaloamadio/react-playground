import React, { useEffect } from 'react';

import classes from './Cockpit.css';


// Second most important hook. It Combines the functionality or 
// the cases that can be covered by all the class based components life-cycles.

// By default takes a function that will run for every render cycle.

// So for example we can do what we could have done in ComponentDidUpdate, 
// for example an HTTP request. Also runs the first time, so it will be 
// the same as ComponentDidMount to.

// ----------  How do we control it usage?

// useEffect( () => {
      // Some code executed only first time, cause the array is empty. 
      // Will be like ComponentDidMount
  //  },
//  [] );

// useEffect( () => {
      // Some code executed when props.persons change
  //  },
//  [props.persons] );

// useEffect( () => {
      // Some code executed when props.otherVar or “a” or “b” change
  //  },
//  [props.otherVar, a, b] );

// ---------- cleanup with useEffect

// We can return a function inside the first parameter of useEffect (that is another function)
// And if we use it with the empty array it will act as componentWillUmount

// useEffect( () => {
      // Some code executed only first time, cause the array is empty. 
      // Will be like ComponentDidMount
//	return( () => { // code executed as WillUnmount })
//    },
//  [] );


const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
