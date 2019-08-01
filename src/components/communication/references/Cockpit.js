import React, { useEffect, useRef } from 'react';

// As this is a functional component, createRef will not work.
// Instead we have to use useRef hook

// We will demonstrate with a dummy example. When this component
// is rendered, click button to toggle persons.

const cockpit = props => {

  // You could pass an initial value here because you can actually
  // use references not just to get access to DOM elements, but you can even
  // store other values in there.
  // Most common usage, access to DOM elements.
  const toggleBtnRef = useRef(null);

  // Here it will not have effect, because render hast not yet been exec
  // toggleBtnRef.current.click()

  // useEffect, exec after every render cycle. So function does not run inmediately.
  // It runs after the jsx code has been rendered  for the first time and therefore
  // useEffect
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    toggleBtnRef.current.click()
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


  return (
    <div>
      <h1>{props.title}</h1>
      <button  ref={toggleBtnRef} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
