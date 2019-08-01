import React from 'react';
import  '../../Persons/Person/Person.css'

export default class Person extends React.Component {

  componentDidMount() {
    this.inputElement.focus()
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
        // Take as arg the element, and set a global variable with name inputElement
        // (can take the name we want) as this element. From that point we can use it
        // anywhere in our app. Since ComponentDidMount exec after render, inputElement will
        // have been set.
        // NOTE: This apporach works in class based components as inputElement is a property of this class.
        // NOTE2: This will focus on last element, asi it is executed on every element. So focus will be on last
        ref={(inputEl) => {this.inputElement = inputEl}}
      />
    </div>
  );
 }
};