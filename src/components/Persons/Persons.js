import React from 'react';
import Person from './Person/Person';

const persons = (props) =>  props.persons.map((person, index) => {
        return <Person name={person.name} age={person.age}  key={person.key}
                       click={() => props.deletePersonHandler(index)} changed={(event) => props.nameChangedHandle(event, person.id)}
        />
    });
