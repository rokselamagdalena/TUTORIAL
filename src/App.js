import React, { Component } from 'react';
//React is reposible for rendering everthing to thr DOM
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'Adri',
      persons: [
          {name: 'Max', age: 28},
          {name: 'Susi', age: 17}
      ],
        showPersons: false

    };

    tooglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    switchNameHandler = (newName) => {
        console.log('Was clickedd!');
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Susi', age: 27}
        ]})
    };

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})

    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 28},
                {name: 'Susi', age: 27}
            ]
        })
    };

  render() { //render sth to the screen

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (

      //this is JSX it will be transpiled to Javascript
        //to add css style we add atribute className (class is reserved for Javascript)
      <div className="App">
       <h1>Hi, I'm a React App</h1>
          <p>I hope to have fun</p>
          <button style={style} onClick={this.tooglePersonHandler}>Switch Name</button>
          { this.state.showPersons ?
              <div >
                  <Person
                      name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'Magda!')}
                  >My hobbies is: Racing</Person>
                  <Person
                      name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}
                  />
                  <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
                  <UserOutput  userName={this.state.username}/>
                  <UserOutput  userName="Madzia"/>
              </div> : null
          }

      </div>
    );
    //this is compiled into this code
    //   return React.createElement('div', {className: 'App',}, React.createElement('h1',null, 'Hi, I\'m a React App' ))
  }
}

export default App;
