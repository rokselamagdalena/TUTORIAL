import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length < 2) {
        assignedClasses.push(classes.red);
    }

    if(props.persons.length === 2) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}t>
         <h1>{props.appTitle}</h1>
         <p className={assignedClasses.join(' ')}>I hope to have fun</p>
         <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    )
};

export default cockpit;