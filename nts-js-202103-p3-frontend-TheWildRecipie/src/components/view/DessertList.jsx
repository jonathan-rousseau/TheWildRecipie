import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DessertItem from './DessertItem';
import './DessertList.css';
import Research from '../common/Research';

function DessertList() {
  // eslint-disable-next-line no-unused-vars
  const [desserts, setDesserts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/dessert')
      .then((response) => {
        setDesserts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="background">
      <h1 className="dessert"> Toutes les recettes de désserts </h1>
      <div className="container">
        <div className="souscontainer">
          <h2>Rechercher un déssert</h2>
          <Research search={search} setSearch={setSearch} />
        </div>
        <Link to="/dessertForm">
          <button type="button" className="bouton-creation">
            Créer une nouvelle recette
          </button>
        </Link>
      </div>
      {desserts

        .filter(
          (dessert) =>
            dessert.description.toLowerCase().includes(search) ||
            dessert.name.toLowerCase().includes(search)
        )
        .map((dessert) => (
          <li key={dessert.id}>
            <DessertItem
              name={dessert.name}
              description={dessert.description}
            />
          </li>
        ))}
    </div>
  );
}

export default DessertList;
