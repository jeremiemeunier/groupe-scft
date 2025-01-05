import { ThemeContext } from "@context/ThemeContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const PageError404 = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Page non trouvée — TeuTeuTrain Company";
    setShade("");
  }, []);

  return (
    <div className="teaui grid bg-vert-eau sv-100 va-center">
      <div className="teaui grid format-page ha-center">
        <img src="/imgs/assets/assets_eyes.webp" height={"120px"} />
        <h2 className="teaui text align-center">
          Il semblerait que vous n’ayez pas pris la bonne direction...
        </h2>
        <p className="teaui text align-center">
          Cette page est introuvable ou n’existe plus.
        </p>
        <div className="teaui grid ha-center">
          <Link
            to={"/"}
            className="teaui cta shade color-vert-eau level-primary sl"
          >
            Rejoindre l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageError404;
