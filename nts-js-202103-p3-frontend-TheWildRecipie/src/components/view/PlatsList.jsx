import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlatsItem from './PlatsItem';
import './PlatsList.css';
import Research from '../common/Research';

function PlatsList() {
  // eslint-disable-next-line no-unused-vars
  const [plats, setPlats] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/plat')
      .then((response) => {
        setPlats(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="background">
      <h1 className="plat"> Toutes les recettes de plats </h1>
      <div className="container">
        <div className="souscontainer">
          <h2>Rechercher un plat</h2>
          <div className="test">
            <Research search={search} setSearch={setSearch} />
          </div>
        </div>
        <Link to="/platsForm">
          <button type="button" className="bouton-creation">
            Créer une nouvelle recette
          </button>
        </Link>
      </div>

      {plats

        .filter(
          (plat) =>
            plat.description.toLowerCase().includes(search) ||
            plat.name.toLowerCase().includes(search)
        )
        .map((plat) => (
          <li key={plat.id}>
            <PlatsItem name={plat.name} description={plat.description} />
          </li>
        ))}
    </div>
  );
}

export default PlatsList;
