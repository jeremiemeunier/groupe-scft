import { Link } from "react-router-dom";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <Link to={"/"}>
        <img src="/imgs/ttt-groupe-logo.svg" height={54} />
      </Link>
    </div>
  );
};

export default PartFooterLogo;
