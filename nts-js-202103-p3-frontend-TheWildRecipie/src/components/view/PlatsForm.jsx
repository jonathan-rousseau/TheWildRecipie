/* eslint-disable no-alert */
import axios from 'axios';
import React, { useState } from 'react';
import './PlatsItem.css';

import FormInput from '../common/FormInput';

function PlatsForm() {
  const [plat, setPlat] = useState({
    name: '',
    description: '',
    user_id: 1,
    category_id: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/plat', plat)
      .then((response) => {
        alert(response.data);
      })

      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form className="platGlobal" onSubmit={handleSubmit}>
        <h1 className="addPlat">Ajouter une recette </h1>
        <FormInput
          classInput
          label="name"
          name="name"
          value={plat}
          setValue={setPlat}
        />
        <label htmlFor="Description">
          <span className="textAreaLabel">Description:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            rows="10"
            id="Description"
            onChange={(e) => setPlat({ ...plat, description: e.target.value })}
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

export default PlatsForm;
