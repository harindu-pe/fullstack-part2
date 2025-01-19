import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if name already exists
    const foundPerson = persons.find((person) => person.name === newName);

    if (!!foundPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      //adding to state
      setPersons((prev) => [
        ...prev,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
    }
  };

  const filteredPersons = persons.filter((person) => {
    const lowerCasePersonName = person.name.toLowerCase();
    return lowerCasePersonName.includes(filter.toLowerCase());
  });

  useEffect(() => {
    console.log("Effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("Promise Fulfilled");
      setPersons(response.data);
    });
    console.log("Started");
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
      />
    </div>
  );
};

export default App;
