/* eslint-disable no-alert */
import axios from 'axios';
import React, { useState } from 'react';
import './PlatsForm.css';
import Swal from 'sweetalert2';

import FormInput from '../common/FormInput';

function PlatsForm() {
  const userId = localStorage.getItem('USERID');
  const [plat, setPlat] = useState({
    name: '',
    description: '',
    user_id: userId,
    category_id: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/plat', plat)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Recette de plat ajoutée avec succès!',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      })

      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Il faut être connecté pour ajouter une nouvelle recette',
          showConfirmButton: false,
          timer: 3000,
        })
      );
  };

  return (
    <div>
      <form className="platGlobal" onSubmit={handleSubmit}>
        <h1 className="addPlat">Ajouter une recette de plat</h1>
        <FormInput
          label="Nom de la recette"
          name="name"
          value={plat}
          setValue={setPlat}
          required
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
