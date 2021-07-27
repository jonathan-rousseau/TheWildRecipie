import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FormInput from '../../common/FormInput';
import './SignUp.css';

function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    pseudo: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/inscription', user)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Votre compte à été créé avec succès',
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
          title:
            'Cette adresse email est déjà associée à un compte ou le pseudo est déjà utilisé',
          showConfirmButton: false,
          timer: 3000,
        })
      );
  };
  return (
    <div className="signUp">
      <form className="containerForm" onSubmit={handleSubmit}>
        <FormInput
          className="field"
          label="Email"
          name="email"
          type="email"
          value={user}
          setValue={setUser}
        />
        <FormInput
          className="field"
          label="Password"
          name="password"
          type="password"
          value={user}
          setValue={setUser}
        />
        <FormInput
          className="field"
          label="Pseudo"
          name="pseudo"
          type="text"
          value={user}
          setValue={setUser}
        />
        <div className="containerBouton">
          <button className="boutonSignUp" type="submit">
            Créer mon compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
