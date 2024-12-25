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
      <div className="teaui grid format-page sl pt40">
        <p>
          Vous transporter, notre métier — © {new Date().getFullYear()} —
          TeuTeuTrain Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
