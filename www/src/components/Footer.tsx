import PartFooterLogo from "@part/footer/PartFooterLogo";
import PartFooterSocial from "@part/footer/PartFooterSocial";

const Footer = () => {
  return (
    <footer className="teaui footer mt120">
      <div className="teaui grid format-page sl tc-5">
        <PartFooterLogo />
        <PartFooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
