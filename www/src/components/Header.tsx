import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="teaui header-root">
      <div className="teaui header-container">
        <div className="teaui grid tac va-center">
          <Link to={"/"}>
            <img src="/imgs/logo.svg" height={24} />
          </Link>
          {pathname.startsWith("/sgp") && (
            <img src="/imgs/societe-grand-projet-color-black.svg" height={40} />
          )}
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

const Nav = () => {
  return (
    <nav className="teaui header-nav">
      <ul>
        <li>
          <Link to={"/trains"}>Trains</Link>
        </li>
        <li>
          <Link to={"/valeurs"}>Valeurs</Link>
        </li>
        <li>
          <Link to={"/gare-connexions"}>Nos gares</Link>
        </li>
        <li>
          <Link to={"/travaux"}>Chantiers</Link>
        </li>
      </ul>
    </nav>
  );
};
