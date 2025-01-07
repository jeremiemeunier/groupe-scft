import Link from "next/link";

const PartFooterFirms = () => {
  return (
    <div className="teaui footer-column">
      <h6>Toutes les entreprises</h6>
      <ul>
        <li>
          <Link href={"/societe/groupe"}>TeuTeuTrain SA</Link>
        </li>
        <li>
          <Link href={"/societe/reseaux"}>TeuTeuTrain Réseaux</Link>
        </li>
        <li>
          <Link href={"/societes/gare-connexions"}>
            TeuTeuTrain Gare & Connexions
          </Link>
        </li>
        <li>
          <Link href={"/societes/fret"}>TeuTeuTrain FRET</Link>
        </li>
        <li>
          <Link href={"/societes/societe-grands-projets"}>
            Société des Grands Projets
          </Link>
        </li>
        <li>
          <Link href={"/societes/crimson"}>Crimson</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterFirms;
