import React from 'react';

// Another form of HOC compponent, like a normal JS function.
// Thats why the file is called with and not With.

// The first argument is the wrapped component and then
// the rest of the arguments are the things you need. 
// There can be more than one arg of course.
// -----
// We do not return JSX, we return another function definition, of a component function
// So we have a function that returns a function (a functional component)
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* Must start with uppercase letter, so browser knows it is a component. */}
            {/* If we do not spread props, they are not passed */}
            <WrappedComponent {...props}/>
        </div>
    )
}
export default withClass

// To use this one, see file inside components/hoc-functional

// Which one should we use? If we need to change a class, or somethig very simple, 
// probably the component approach is simpler and better.