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
        <div className="teaui grid gsc-2">
          <Link
            href="https://bff.ecoindex.fr/redirect/?url=https://groupe-scft.jeremiemeunier.fr"
            target="_blank"
          >
            <img
              src="https://bff.ecoindex.fr/badge/?theme=light&url=https://groupe-scft.jeremiemeunier.fr"
              alt="Ecoindex Badge"
            />
          </Link>
        </div>
        <div className="teaui grid gwc-2 gsc-3">
          <p className="teaui text label">
            © {new Date().getFullYear()} — SCFT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
