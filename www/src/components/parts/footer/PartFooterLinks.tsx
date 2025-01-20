import { Link } from "react-router-dom";

const PartFooterLinks = () => {
  return (
    <div className="teaui footer-column">
      <h6>Nous découvrir</h6>
      <ul>
        <li>
          <Link to={""}>Nos engagements</Link>
        </li>
        <li>
          <Link to={""}>Techno Campus</Link>
        </li>
        <li>
          <Link to={""}>Identité</Link>
        </li>
        <li>
          <Link to={"/information/eco-conception"}>Éco conception</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterLinks;
