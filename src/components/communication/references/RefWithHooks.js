import React, { Component } from 'react';

import classes from '../../../containers/App.css';
import Cockpit from './Cockpit';

// Use of reference with hooks, check how to inside Cockpit.js

export default class RefWithHooks extends Component {
  state = {
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <p> Component with persons </p>
    }

    return (
      <div className={classes.App}>
        <h2>Use of references with hooks</h2>  
        <p>Important code, inside Cockpit.js, in the same folder of this component.</p>
        <Cockpit
          title={this.props.appTitle}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}