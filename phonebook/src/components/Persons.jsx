import React from "react";

const Persons = ({ filter, filteredPersons, persons, handleDelete }) => {
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
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  handleDelete({ id: person.id, name: person.name });
                }}
              >
                delete
              </button>
            </div>
          ))}
    </>
  );
};

export default Persons;
