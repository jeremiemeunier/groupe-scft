// import { ThemeContext } from "@context/ThemeContext";
// import { useContext, useEffect } from "react";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page non trouvée — SCFT",
  description: "Page non trouvée — SCFT",
};

const NotFound = () => {
  return (
    <div className="teaui grid bg-vert-eau sv-100 va-center">
      <div className="teaui grid format-page ha-center">
        <Image
          src="/imgs/assets/assets_eyes.webp"
          height={"120"}
          width={"427"}
          alt=""
        />
        <h2 className="teaui text align-center">
          Il semblerait que vous n&apos;ayez pas pris la bonne direction...
        </h2>
        <p className="teaui text align-center">
          Cette page est introuvable ou n&apos;existe plus.
        </p>
        <div className="teaui grid ha-center">
          <Link
            href={"/"}
            className="teaui cta shade color-vert-eau level-primary sl"
          >
            Rejoindre l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
