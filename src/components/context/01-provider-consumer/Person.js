import React from 'react';
import  '../../Persons/Person/Person.css'

import AuthContext from '../../../context/auth-context'

// In here we want to CONSUME the context.
// You go where you return your JSX code, where you want to use the context,

// AuthContext.Consumer does not take JSX as child, instead it takes a function
// which will eventually return the JSX code, and this function will be executed
// by the consumer or by react context API. This function will take our context object,
// and this is how we get access to the context here, where we consume it.
// That argument is taken by AuthContext component

export default class Person extends React.Component {

  componentDidMount() {
  }

  render() {
  return (
    <div className="Person">
      <AuthContext.Consumer>
        { (context) => context.authenticated ? <p>Authenticated</p> : <p>Log in</p> }
      </AuthContext.Consumer>
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input 
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
      />
    </div>  
  );
 }
};
