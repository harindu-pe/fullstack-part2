import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number:
          <input type="text" value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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
    </div>
  );
};

export default App;
