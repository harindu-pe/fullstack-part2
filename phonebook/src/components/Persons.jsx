import React from "react";

const Persons = ({ filter, filteredPersons, persons }) => {
  return (
    <>
      {!!filter
        ? filteredPersons.map((person) => (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          ))
        : persons.map((person) => (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          ))}
    </>
  );
};

export default Persons;
