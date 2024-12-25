import { Link } from "react-router-dom";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <div className="teaui grid tac">
        <Link to={"/"}>
          <img src="/imgs/ttt-groupe-logo.svg" height={64} />
        </Link>
      </div>
    </div>
  );
};

export default PartFooterLogo;
