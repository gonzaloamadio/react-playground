import React from 'react';
import './Person.css' 

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {props.clickDelete && <button onClick={props.clickDelete}>Delete me</button>}
        </div>
    )
};

export default person;