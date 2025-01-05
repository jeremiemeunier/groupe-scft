import { Link } from "react-router-dom";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <div className="teaui grid">
        <Link to={"/"}>
          <img src="/imgs/ttt-groupe-logo.webp" height={80} />
        </Link>
      </div>
    </div>
  );
};

export default PartFooterLogo;
