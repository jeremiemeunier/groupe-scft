import PartFooterLogo from "@part/footer/PartFooterLogo";
import PartFooterLinks from "@part/footer/PartFooterLinks";
import PartFooterFirms from "@part/footer/PartFooterFirms";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="teaui footer mt120">
      <div className="teaui grid format-page sl tc-4">
        <PartFooterLogo />
        <PartFooterLinks />
        <PartFooterFirms />
      </div>
      <div className="teaui grid format-page tc-4 sl pt40 pb40 va-center">
        <Link
          to="https://bff.ecoindex.fr/redirect/?url=https://teuteutrainco.jeremiemeunier.fr"
          target="_blank"
        >
          <img
            src="https://bff.ecoindex.fr/badge/?theme=light&url=https://teuteutrainco.jeremiemeunier.fr"
            alt="Ecoindex Badge"
          />
        </Link>
        <div className="teaui grid gwc-3 gsc-2">
          <p className="teaui text label">
            Vous transporter, notre métier — © {new Date().getFullYear()} —
            TeuTeuTrain Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
