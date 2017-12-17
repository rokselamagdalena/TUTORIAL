import React, { Component } from 'react';
//React is reposible for rendering everthing to thr DOM
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
    state = {
        username: 'Adri',
      persons: [
          {id: 'a',name: 'Max', age: 28},
          {id: 'b', name: 'Susi', age: 17}
      ],
        showPersons: false,
        userInput: ''

    };

    tooglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Susi', age: 27}
        ]})
    };

    deletePersonHandler = (personIndex) => {


        const persons = [...this.state.persons]; //or const persons = this.state.persons.slice()

        // const persons = this.state.persons; //it was a pointer
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})

    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

        this.setState({
            persons: [
                {name: event.target.value, age: 28},
                {name: 'Susi', age: 27}
            ]
        })
    };

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    };

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);

        const updatedText = text.join('');
        this.setState({userInput: updatedText})
    };


    render() { //render sth to the screen, everything is rendered when react render view

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      const charList = this.state.userInput.split(' ,').map((ch, index) => {
          return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
      });


      let persons = null;

      if(this.state.showPersons) {
          persons = (
              <div >
                  {this.state.persons.map((person, index) => {
                      return <Person key={person.key} name={person.name} age={person.age}
                                     click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangedHandle(event, person.id)}
                      />
                  })}
              </div>
          );
      }

    return (

      //this is JSX it will be transpiled to Javascript
        //to add css style we add atribute className (class is reserved for Javascript)
      <div className="App">
       <h1>Hi, I'm a React App</h1>
          <p>I hope to have fun</p>
          <button style={style} onClick={this.tooglePersonHandler}>Switch Name</button>
          {persons}
          <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
          <UserOutput  userName={this.state.username}/>
          <UserOutput  userName="Madzia"/>

          <hr />

          <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>

          {charList}

      </div>

    );
    //this is compiled into this code
    //   return React.createElement('div', {className: 'App',}, React.createElement('h1',null, 'Hi, I\'m a React App' ))
  }
}

export default App;
