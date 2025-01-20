"use client";

import { ThemeContext } from "@/_context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";

const PartFooterLogo = () => {
  const { websiteDarkTheme } = useContext(ThemeContext);

  return (
    <div className="teaui footer-column">
      <div className="teaui grid ha-start tac">
        <Link href={"/"}>
          <img
            src={
              websiteDarkTheme
                ? `/imgs/logo_groupe_white_4x.webp`
                : `/imgs/logo_groupe_color_4x.webp`
            }
            height={80}
          />
        </Link>
      </div>
    </div>
  );
};

export default PartFooterLogo;
