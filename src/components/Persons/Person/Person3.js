import React from 'react';
import './Person.css' 

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* Two ways binding. Pass data from this component to father. In conjuntion with the
            code of props.changed function that reads this input element value. */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;