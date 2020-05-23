import React, { Component } from 'react';
import classes from './App.css';
import ToBuy from './Container/ToBuy/ToBuy';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <h1>*List-App*</h1>
          <ToBuy />
      </div>
    );
  }
}

export default App;
