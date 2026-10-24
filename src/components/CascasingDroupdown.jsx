import React, { useState } from "react";

function CascasingDroupdown() {
  const [countrys, setCountrys] = useState("");
  const [city, setCity] = useState("");
  const data = {
    Bangladesh: ["Dhaka", "Sylhet", "Chittagong"],
    India: ["Delhi", "Mumbai", "Kolkata"],
    USA: ["New York", "Los Angeles", "Chicago"],
  };
  return (
    <div>
      <select
        value={countrys}
        onChange={(e) => {
          (setCountrys(e.target.value), setCity(""));
        }}
      >
        <option value="">---Country</option>
        {Object.keys(data).map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </select>
      {countrys && (
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">---Select City---</option>
          {data[countrys].map((ct, i) => (
            <option value={ct} key={i}>
              {ct}
            </option>
          ))}
        </select>
      )}
      {
        <div>
            {countrys && city ? (
                <p>Selected {countrys} {city}</p>
            ):(
                <p>No selection yet</p>
            )}
        </div>
      }
      <div>
        <p>Country {countrys} : City {city}</p>
      </div>
    </div>
  );
}

export default CascasingDroupdown;
