import Link from "next/link";
import Switch from "./Switch";

const Header = () => {
  return (
    <header className={"teaui header-root"}>
      <div className="teaui header-top">
        <Switch />
      </div>
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
      <Link href={"/"}>
        <img src="/imgs/ttt-groupe-logo.webp" height={"40px"} />
      </Link>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className={"teaui header-nav"}>
      <ul>
        <li>
          <Link href={"/trains"}>Trains</Link>
        </li>
        <li>
          <Link href={"/valeurs"}>Valeurs</Link>
        </li>
        <li>
          <Link href={"/societes/gare-connexions"}>Nos gares</Link>
        </li>
      </ul>
    </nav>
  );
};
