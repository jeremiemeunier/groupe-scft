import PartFooterLogo from "@part/footer/PartFooterLogo";
import PartFooterLinks from "@part/footer/PartFooterLinks";
import PartFooterFirms from "@part/footer/PartFooterFirms";

const Footer = () => {
  return (
    <footer className="teaui footer mt120">
      <div className="teaui grid format-page sl tc-4">
        <PartFooterLogo />
        <PartFooterLinks />
        <PartFooterFirms />
      </div>
      <div className="teaui grid format-page tc-4 sl pt40">
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
