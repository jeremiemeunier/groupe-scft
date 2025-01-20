import { ThemeContext } from "@context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { shade } = useContext(ThemeContext);

  return (
    <header
      className={
        shade ? `teaui header-root color-${shade}` : "teaui header-root"
      }
    >
      <div className="teaui header-container">
        <div className="teaui grid tac va-center">
          <Logo />
        </div>
        <div className="teaui grid ha-end">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <div className="teaui app-logo">
      <Link to={"/"}>
        <img src="/imgs/ttt-groupe-logo.webp" height={"40px"} />
      </Link>
    </div>
  );
};

const Nav = () => {
  const { shade } = useContext(ThemeContext);

  return (
    <nav
      className={shade ? `teaui header-nav color-${shade}` : "teaui header-nav"}
    >
      <ul>
        <li>
          <Link to={"/trains"}>Trains</Link>
        </li>
        <li>
          <Link to={"/valeurs"}>Valeurs</Link>
        </li>
        <li>
          <Link to={"/societes/gare-connexions"}>Nos gares</Link>
        </li>
        <li>
          <Link to={"/chantiers"}>Chantiers</Link>
        </li>
      </ul>
    </nav>
  );
};
