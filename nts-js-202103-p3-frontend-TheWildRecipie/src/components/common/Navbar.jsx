import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <div className="all">
        <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
          <div className="navbar_logo" />
          <ul className="navbar_links">
            <li className="navbar__item">
              <Link to="/" className="navbar_link" onClick={handleShowLinks}>
                ACCUEIL
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/plats"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                PLATS
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/desserts"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                DESSERTS
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/profile"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                Mon Compte
              </Link>
            </li>
          </ul>
          <button
            className="navbar_burger"
            onClick={handleShowLinks}
            type="button"
          >
            <span className="burger-bar" />
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
