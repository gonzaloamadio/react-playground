import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {props.clickDelete && <button onClick={props.clickDelete}>Delete me</button>}
        </div>
    )
};

export default person;