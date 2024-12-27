import { Link } from "react-router-dom";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <div className="teaui grid tac">
        <Link to={"/"}>
          <img src="/imgs/ttt-groupe-logo.svg" height={56} />
        </Link>
      </div>
      <div className="teaui grid tac">
        <Link to={"/societe/societe-grands-projets"}>
          <img src="/imgs/societe-grand-projet-color-black.svg" height={56} />
        </Link>
      </div>
    </div>
  );
};

export default PartFooterLogo;
