import React, { useEffect, useRef } from 'react';
import AuthContext from '../../../context/auth-context'


const cockpit = props => {

  const toggleBtnRef = useRef(null);

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
      <AuthContext.Consumer>
      { (context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default cockpit;
