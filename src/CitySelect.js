 
import React, { useState} from 'react';
export default function CitySelect({ onCityChange }) {
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState(['Paris', 'London', 'New York']);
  
    const handleCityChange = (e) => {
      const city = e.target.value;
      setSelectedCity(city);
      onCityChange(city);
    };
  
    const addCity = () => {
      const newCity = prompt("Enter a new city:");
      if (newCity) setCities([...cities, newCity]);
    };
  
    return (
      <div>
        <h3>Select your city:</h3>
        <button onClick={addCity} className='btn btn-info mt-2'>Add City</button>
        <select value={selectedCity} onChange={handleCityChange} className="form-select mt-3">
          <option value="" >Select a city </option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p className="mt-3">Selected City: {selectedCity}</p>
      </div>
    );
  }