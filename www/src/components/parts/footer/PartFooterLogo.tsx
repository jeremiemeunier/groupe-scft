import { Link } from "react-router-dom";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <div className="teaui grid">
        <Link to={"/"}>
          <img src="/imgs/ttt-groupe-logo.png" height={56} />
        </Link>
        {/* <Link to={"/societes/societe-grands-projets"}>
          <img src="/imgs/societe-grand-projet-color-black.png" height={48} />
        </Link> */}
      </div>
    </div>
  );
};

export default PartFooterLogo;
