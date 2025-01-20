import { useEffect, useState } from "react";
import countryService from "../services/countries";
import SingleCountry from "./SingleCountry";
import ListSingleCountry from "./ListSingleCountry";

const Countries = ({ filteredCountries, filter }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (filteredCountries.length === 1) {
      countryService
        .getOne(filteredCountries[0].name.common)
        .then((initialCountry) => {
          console.log("country retrieved");
          setCountry(initialCountry);
        });
    }
  }, [filteredCountries]);

  if (filteredCountries.length === 1) {
    // check if only 1
    return <SingleCountry country={country} />;
  } else if (filteredCountries.length <= 10) {
    // check if 10 or fewer
    return (
      <div>
        {filteredCountries.map((country) => (
          <ListSingleCountry key={country.name.common} country={country} />
        ))}
      </div>
    );
  } else if (filteredCountries.length > 10) {
    // check if over 10 & filter is not empty
    if (filter.length > 1) {
      return <div>Too many matches, specify another filter</div>;
    } else {
      return (
        <div>
          {filteredCountries.map((country) => (
            <ListSingleCountry key={country.name.common} country={country} />
          ))}
        </div>
      );
    }
  }
};

export default Countries;
