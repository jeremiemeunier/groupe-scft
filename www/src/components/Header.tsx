import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="teaui header-root">
      <div className="teaui header-container">
        <Link to={"/"}>
          <img src="/imgs/logo.svg" height={24} />
        </Link>
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
