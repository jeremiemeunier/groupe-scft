import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageError404 = () => {
  useEffect(() => {
    document.title = "Page non trouvée — TeuTeuTrain Company";
  }, []);

  return (
    <div className="teaui grid format-page sv-100 va-center">
      <h2 className="teaui text align-center">
        Il semblerait que vous n’ayez pas pris la bonne direction...
      </h2>
      <p className="teaui text align-center">
        Cette page est introuvable ou n’existe plus.
      </p>
      <div className="teaui grid ha-center">
        <Link to={"/"} className="teaui cta level-primary sl">
          Rejoindre l'accueil
        </Link>
      </div>
    </div>
  );
};

export default PageError404;
