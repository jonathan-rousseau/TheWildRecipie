import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DessertItem from './DessertItem';

function DessertList() {
  // eslint-disable-next-line no-unused-vars
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/dessert`)
      .then((response) => {
        setDesserts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1> Toutes les recettes de désserts </h1>
      <ul>
        {desserts.map((dessert) => (
          <li>
            <DessertItem
              name={dessert.name}
              description={dessert.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DessertList;
