/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory(null);
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('USERID');

  const getUser = async () => {
    try {
      await axios
        .get(`http://localhost:8080/profile/${id}`, {
          id,
        })
        .then((response) => {
          if (id !== null) {
            setUser(response.data[0]);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERID');
    history.push('/');
  };

  return (
    <div className="container_profil">
      {!id ? (
        history.push('/connexion')
      ) : !user ? (
        <p>loading ...</p>
      ) : (
        <div className="mesinfos">
          <span> Mon pseudo: {user.pseudo} </span>
          <span>Mon email: {user.email} </span>
          <div className="containerBouton">
            <button
              className="deconnexion"
              type="button"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
