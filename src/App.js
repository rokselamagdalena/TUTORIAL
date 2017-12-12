import React, { Component } from 'react';
//React is reposible for rendering everthing to thr DOM
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() { //render sth to the screen
    return (

      //this is JSX it will be transpiled to Javascript
        //to add css style we add atribute className (class is reserved for Javascript)
      <div className="App">
       <h1>Hi, I'm a React App</h1>
          <p>I hope to have fun</p>
          <Person/>
          <Person/>
      </div>
    );
    //this is compiled into this code
    //   return React.createElement('div', {className: 'App',}, React.createElement('h1',null, 'Hi, I\'m a React App' ))
  }
}

export default App;
