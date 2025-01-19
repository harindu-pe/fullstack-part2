import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    const foundPerson = persons.find((person) => person.name === newName);

    if (!!foundPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      //adding to state
      setPersons((prev) => [...prev, { name: newName }]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <div key={i}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
