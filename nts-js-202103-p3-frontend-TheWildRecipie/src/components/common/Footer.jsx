import './Footer.css';
import Facebook from '../../media/facebook.svg';
import Insta from '../../media/instagram.svg';
import Twitter from '../../media/twitter.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="networkLink">
        <h1 className="title">The Wild Recipies</h1>
        <img src={Facebook} alt="facebook" className="networkLogo" />
        <img src={Insta} alt="instagram" className="networkLogo" />
        <img src={Twitter} alt="twitter" className="networkLogo" />
      </div>
      <div className="credits">
        <p className="adress">
          Jonathan • 01 rue adresse XX XXX Ville
          <br />
          +33XXXXXXXXX • Rousseau_jonathan@outlook.fr
        </p>
      </div>
      <ul className="conditions">
        <li className="conditionElement">
          Conditions générales d&#039;utilisation
          <span className="disc"> • </span>
        </li>
        <li className="conditionElement">
          Politique relative à la protection des données personnelles
          <span className="disc"> • </span>
        </li>
        <li className="conditionElement"> Politique en matière de cookies</li>
      </ul>
    </div>
  );
};

export default Footer;
