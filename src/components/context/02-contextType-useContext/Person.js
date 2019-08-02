import React from 'react';
import  '../../Persons/Person/Person.css'

import AuthContext from '../../../context/auth-context'

export default class Person extends React.Component {

  // This allows React to connect this component with context.
  // And this gives us a property called context: this.context
  // NOTE: Can only be used in classed based components, because is a class property.
  static contextType = AuthContext

  componentDidMount() {
    // Now we can access in lyfe-cycle methods to the context.
    console.log(this.context.authenticated)
    console.log(this.context.login)
  }

  render() {
  return (
    <div className="Person">
        { this.context.authenticated ? <p>Authenticated</p> : <p>Log in</p> }
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
