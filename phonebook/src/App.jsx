import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import noteService from "./services/notes";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      noteService.deletePerson(person.id);
      window.location.reload();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if name already exists
    const foundPerson = persons.find((person) => person.name === newName);

    if (!!foundPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // person object
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      };

      // adding to the server
      noteService.create(personObject).then((returnedNote) => {
        // adding to state
        setPersons(persons.concat(returnedNote));
      });
    }
  };

  const filteredPersons = persons.filter((person) => {
    const lowerCasePersonName = person.name.toLowerCase();
    return lowerCasePersonName.includes(filter.toLowerCase());
  });

  useEffect(() => {
    noteService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />

      <h2>Numbers</h2>

      <Persons
        filter={filter}
        filteredPersons={filteredPersons}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
