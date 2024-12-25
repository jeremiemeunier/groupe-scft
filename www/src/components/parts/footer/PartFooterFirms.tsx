import { Link } from "react-router-dom";

const PartFooterFirms = () => {
  return (
    <div className="teaui footer-column">
      <h6>Toutes les entreprises</h6>
      <ul>
        <li>
          <Link to={""}>TeuTeuTrain Réseaux</Link>
        </li>
        <li>
          <Link to={""}>TeuTeuTrain Gare & Connexions</Link>
        </li>
        <li>
          <Link to={""}>TeuTeuTrain FRET</Link>
        </li>
        <li>
          <Link to={""}>Société des Grands Projets</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterFirms;
