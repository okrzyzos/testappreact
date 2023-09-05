import React, { useState } from 'react';
import './App.css';
import Test from './Test.js';
import Api from './Api.js';
import UserAPI from './UserAPI';
import DataGrid from './CustomDataGrid';
import Timeline from './Timeline.js';
import Cycle from './Cycle.js';
import Voyelles from './Voyelles.js';
import Filtre from './Filtre.js';

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [sortedCities, setSortedCities] = useState([]);
  const [showCities, setShowCities] = useState(true);
  const cities = ['Lyon', 'Marseille', 'Paris', 'Lens'];

  function handleClick(city) {
    setSelectedCity(city);
  }

  function handleFilter() {
    const filteredCities = cities.filter(city => city.charAt(0).toLowerCase() === 'l');
    setSelectedCity(filteredCities.join(', '));
  }

  function handleReset() {
    setSelectedCity('');
  }

  function handleSort() {
    const sorted = [...cities].sort((a, b) => b.localeCompare(a));
    setSortedCities(sorted);
  }

  function handleToggleCities() {
    setShowCities(!showCities);
  }

  return (
    <div className="App">
      {/* <h1>Olivier krzyzostoniak</h1>
      {showCities && (
        <ul>
          {sortedCities.length > 0
            ? sortedCities.map((city) => (
                <li key={city} onClick={() => handleClick(city)}>
                  {city}
                </li>
              ))
            : cities.map((city) => (
                <li key={city} onClick={() => handleClick(city)}>
                  {city}
                </li>
              ))}
        </ul>
      )}
      <button onClick={handleFilter}>Afficher les villes commençant par "L"</button>
      <button onClick={handleReset}>Réinitialiser</button>
      <button onClick={handleSort}>Trier par ordre décroissant</button>
      <button onClick={handleToggleCities}>
        {showCities ? 'Masquer les villes' : 'Afficher les villes'}
      </button>
      <p>Selected city: {selectedCity}</p> */}
      <Filtre />
      {/* <Test /> */}
      {/* <Api /> */}
      {/* <UserAPI /> */}
      {/* <DataGrid /> */}
      {/* <Timeline /> */}
      {/* <Cycle /> */}
      {/* <Voyelles /> */}
    </div>
  );
}

export default App;
