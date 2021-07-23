/* eslint-disable no-alert */
import axios from 'axios';
import React, { useState } from 'react';

import FormInput from '../common/FormInput';

function DessertForm() {
  const [dessert, setDessert] = useState({
    name: '',
    description: '',
    user_id: 1,
    category_id: 2,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/plat', dessert)
      .then((response) => {
        alert(response.data);
      })

      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form className="platGlobal" onSubmit={handleSubmit}>
        <h1 className="addPlat">Ajouter une recette de déssert </h1>
        <FormInput
          classInput
          label="Nom de la recette"
          name="name"
          value={dessert}
          setValue={setDessert}
        />
        <label htmlFor="Description">
          <span className="textAreaLabel">Description:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            type="text"
            rows="10"
            id="Description"
            onChange={(e) =>
              setDessert({ ...dessert, description: e.target.value })
            }
            required
          />
        </label>

        <div className="container">
          <input className="bouton" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}

export default DessertForm;
