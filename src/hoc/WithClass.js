import React from 'react';

// It is a good practice call HOC components with<SOMETHING>
const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;