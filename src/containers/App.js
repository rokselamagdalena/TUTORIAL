import React, { Component } from 'react';
//React is reposible for rendering everthing to thr DOM
import classes  from  './App.css';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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


      const charList = this.state.userInput.split(' ,').map((ch, index) => {
          return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
      });


      let persons = null;

      if(this.state.showPersons) {
          persons = (
              <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandle}/>
          );
      }

    return (


      //this is JSX it will be transpiled to Javascript
        //to add css style we add atribute className (class is reserved for Javascript)
      <div className={classes.App}>
          <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.tooglePersonHandler}/>
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
  }
}

export default App;
