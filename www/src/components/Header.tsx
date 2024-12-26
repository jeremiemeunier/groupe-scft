import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="teaui header-root">
      <div className="teaui header-container">
        <div className="teaui grid tac va-center">
          <Link to={"/"}>
            <img src="/imgs/icon_colored.svg" height={28} />
          </Link>
          {pathname.startsWith("/sgp") && (
            <Link to={"/sgp"} className="teaui ml16 ms-ml16 xs-ml16">
              <img
                src="/imgs/societe-grand-projet-color-black.svg"
                height={40}
              />
            </Link>
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
          <Link to={"/chantiers"}>Chantiers</Link>
        </li>
      </ul>
    </nav>
  );
};
