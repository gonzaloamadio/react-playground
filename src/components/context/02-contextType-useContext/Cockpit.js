import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../../context/auth-context'
 
// Hook useContext, let you access context in your functional component
// function body

const cockpit = props => {

  const toggleBtnRef = useRef(null)
  // Can name variable whatever you want.
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

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
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default cockpit;
