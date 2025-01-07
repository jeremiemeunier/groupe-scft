import PartFooterLogo from "@/_components/parts/footer/PartFooterLogo";
import PartFooterLinks from "@/_components/parts/footer/PartFooterLinks";
import PartFooterFirms from "@/_components/parts/footer/PartFooterFirms";
import Link from "next/link";

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
          href="https://bff.ecoindex.fr/redirect/?url=https://teuteutrainco.jeremiemeunier.fr"
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
