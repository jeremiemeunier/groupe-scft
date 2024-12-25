import { Link } from "react-router-dom";

const PartFooterFirms = () => {
  return (
    <div className="teaui footer-column">
      <h6>Toutes les entreprises</h6>
      <ul>
        <li>
          <Link to={""}>TTT Réseaux</Link>
        </li>
        <li>
          <Link to={""}>TTT Gare & Connexions</Link>
        </li>
        <li>
          <Link to={""}>TTT FRET</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterFirms;
