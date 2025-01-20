import React, { useState } from "react";
import SingleCountry from "./SingleCountry";

const ListSingleCountry = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      {country.name.common}
      <button onClick={handleOnClick}>show</button>
      {show ? <SingleCountry country={country} /> : <div></div>}
    </div>
  );
};

export default ListSingleCountry;
