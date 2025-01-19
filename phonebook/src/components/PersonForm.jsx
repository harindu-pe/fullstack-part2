import React from "react";

const PersonForm = ({
  handleSubmit,
  newName,
  handleNameInput,
  newNumber,
  handleNumberInput,
}) => {
  return (
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
  );
};

export default PersonForm;
