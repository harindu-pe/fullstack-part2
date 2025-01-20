import { useEffect, useState } from "react";
import countryService from "./services/countries";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
      console.log("countries retrieved");
    });
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  // filtering countries
  const filteredCountries = countries.filter((country) => {
    const lowerCaseCountryName = country.name.common.toLowerCase();
    return lowerCaseCountryName.includes(filter.toLowerCase());
  });

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      {console.log(filter)}
      <Countries filteredCountries={filteredCountries} filter={filter} />
    </div>
  );
}

export default App;
