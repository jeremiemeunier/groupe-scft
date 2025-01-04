import { Link } from "react-router-dom";

const PartFooterFirms = () => {
  return (
    <div className="teaui footer-column">
      <h6>Toutes les entreprises</h6>
      <ul>
        <li>
          <Link to={"/societe/groupe"}>TeuTeuTrain SA</Link>
        </li>
        <li>
          <Link to={"/societe/reseaux"}>TeuTeuTrain Réseaux</Link>
        </li>
        <li>
          <Link to={"/societes/gare-connexions"}>
            TeuTeuTrain Gare & Connexions
          </Link>
        </li>
        <li>
          <Link to={"/societes/fret"}>TeuTeuTrain FRET</Link>
        </li>
        <li>
          <Link to={"/societes/societe-grands-projets"}>
            Société des Grands Projets
          </Link>
        </li>
        <li>
          <Link to={"/societes/crimson"}>Crimson</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterFirms;
