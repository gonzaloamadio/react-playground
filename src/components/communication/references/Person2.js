import React from 'react';
import  '../../Persons/Person/Person.css'

export default class Person2 extends React.Component {
  constructor(props){
    super(props)
    // This is any reference object React gives me, whatever that is begind the scenes.
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // You have to acces tu current Reference here first, with current.
    // In current, there is a reference to an input element, so we have focus() method.
    this.inputElementRef.current.focus()
  }

  render() {
  return (
    <div className="Person">
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      
      <input 
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
        // Assign this element to the reference.
        // React will make the connection and inputElementRef will then actually allow me
        // access to the element on which this ref was placed
        ref={this.inputElementRef}
      />
    </div>
  );
 }
};