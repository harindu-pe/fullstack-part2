import React from "react";

const SingleCountry = ({ country }) => {
  if (!country) {
    return null;
  }

  const languages = Object.values(country.languages);

  return (
    <div>
      <h1>
        <b>{country.name.common}</b>
      </h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <div>
        <h2>
          <b>languages:</b>
        </h2>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <img
        src={country.flags.svg}
        alt="flag"
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default SingleCountry;
