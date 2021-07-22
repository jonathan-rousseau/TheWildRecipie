import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlatsItem from './PlatsItem';

function PlatsList() {
  // eslint-disable-next-line no-unused-vars
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    axios
      .get('http://localhost:8080/plat')
      .then((response) => {
        console.log(response);
        setPlats(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1> Toutes les recettes de plats </h1>
      <ul>
        {plats.map((plat) => (
          <li key={plat.id}>
            <PlatsItem name={plat.name} description={plat.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlatsList;
