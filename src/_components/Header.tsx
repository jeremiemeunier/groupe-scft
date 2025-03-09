"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/_context/ThemeContext";

const Header = () => {
  return (
    <header className={"teaui header-root"}>
      <div className="teaui header-top">{/* <Switch /> */}</div>
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
  const { websiteDarkTheme } = useContext(ThemeContext);

  return (
    <div className="teaui app-logo">
      <Link href={"/"}>
        <img
          src={
            websiteDarkTheme
              ? `/imgs/logo_groupe_white_4x.webp`
              : `/imgs/logo_groupe_color_4x.webp`
          }
          height={40}
          alt="Logo SCFT"
        />
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
