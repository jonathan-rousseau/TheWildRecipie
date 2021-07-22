import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="box-profil">
      <h1 className="Profile">Mon Profil</h1>
      <h3 className="elementProfil">
        Mon pseudo: <span>WCS_RECIPIE</span>
      </h3>
      <h3 className="elementProfil">
        Mon adresse email: <span>test@gmail.com</span>
      </h3>
      <h3 className="elementProfil">Mon mot de passe:</h3>
    </div>
  );
}

export default Profile;
