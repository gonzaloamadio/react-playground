import React from 'react';
import classes from './Person.css' 
import styles from '../../containers/App.css'
// Use of CSS Modules

const person = ( props ) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {props.clickDelete && <button className={styles.Red} onClick={props.clickDelete}>Delete me</button>}
        </div>
    )
};

export default person;