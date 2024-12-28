import { ThemeContext } from "@context/ThemeContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const { shade } = useContext(ThemeContext);

  return (
    <header
      className={
        shade ? `teaui header-root color-${shade}` : "teaui header-root"
      }
    >
      <div className="teaui header-container">
        <div className="teaui grid tac va-center">
          <div className="teaui app-logo">
            <Link to={"/"}>
              <span
                className={
                  shade ? `teaui logo-shape color-${shade}` : "teaui logo-shape"
                }
              >
                &nbsp;
              </span>
            </Link>
          </div>
          {pathname.startsWith("/societes/societe-grands-projets") && (
            <Link
              to={"/societes/societe-grands-projets"}
              className="teaui ml16 ms-ml16 xs-ml16"
            >
              <img
                src="/imgs/societe-grand-projet-color-black.png"
                height={40}
              />
            </Link>
          )}
        </div>
        <div className="teaui grid ha-end">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

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
