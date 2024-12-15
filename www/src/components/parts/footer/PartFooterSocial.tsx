import { Link } from "react-router-dom";

const PartFooterSocial = () => {
  return (
    <div className="teaui footer-column gwc-2">
      <Link to={"/"}>
        <img src="/imgs/logo.svg" height={32} />
      </Link>
      <p>Vous transporter, notre métier.</p>
      <p className="teaui text-settings font-size-12 mt40">
        © {new Date().getFullYear()} — TeuTeuTrain Company
      </p>
    </div>
  );
};

export default PartFooterSocial;
