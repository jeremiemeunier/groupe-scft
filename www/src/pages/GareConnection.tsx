import { ThemeContext } from "@context/ThemeContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const PageGareConnection = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Gare & Connexions — TeuTeuTrain Company";
    setShade("corail");
  }, []);

  return (
    <div>
      <div className="teaui grid rgs-0 bg-corail">
        <div
          className="teaui grid sv-60"
          style={{
            backgroundImage: "url(/imgs/pictures/spawn_form_rail.png)",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="teaui grid bg-corail va-center sv-30">
          <div className="teaui grid format-page sl">
            <p className="teaui ma0 ms-ma0 xs-ma0 pa0 ms-pa0 xs-pa0 text fs-80 fw-900">
              Gare & Connexions
            </p>
            <div className="teaui grid tc-2">
              <p className="teaui">
                Ponts audacieux, tunnels interminables, et lignes de train
                mythiques : aucun défi n’est trop grand pour cette équipe
                d’experts… ou presque.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Pourquoi Gare & Connexions ?</h2>
        <p>
          Filiale essentielle de la TeuTeuTrain Company, Gare & Connexion veille
          sur toutes les gares de Teuteuland, de la plus grande à la plus
          improbable. Entre les horaires parfois fantaisistes, les quais
          numérotés sans logique, et les distributeurs de billets qui vendent
          tout sauf des billets, Gare & Connexion est là pour offrir une
          expérience inoubliable aux voyageurs.
        </p>
      </div>

      <div className="teaui grid format-page sl">
        <h2>Les chiffres clés</h2>
        <div className="teaui grid tc-3 cgs-32">
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">
                276 000
              </p>
              <p className="teaui text fs-24 pa0 ma0">
                tuiles nettoyés et remplacés
              </p>
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">5</p>
              <p className="teaui text fs-24 pa0 ma0">
                gare couverte par le plan "Un banc, un toit"
              </p>
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">5000</p>
              <p className="teaui text fs-24 pa0 ma0">
                ouvriers mobilisés, dont 800 pour retrouver les outils égarés.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Notre mission</h2>
        <p>
          Créer, rénover et maintenir des gares accueillantes (ou du moins
          fonctionnelles). Notre objectif : que chaque voyageur arrive à
          destination, même si ce n’était pas celle prévue.
        </p>
      </div>

      <div className="teaui grid bg-corail pa64">
        <div className="teaui grid no-rgs format-page sl">
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/ailleurs-sur-loin"}
          >
            <span className="teaui text fs-24 fw-600">Ailleurs-sur-Loin</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/soleil-en-vadrouille"}
          >
            <span className="teaui text fs-24 fw-600">
              Soleil-en-Vadrouille
            </span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/bordure-les-finis"}
          >
            <span className="teaui text fs-24 fw-600">Bordure-Lès-Finis</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/froidville-en-soupir"}
          >
            <span className="teaui text fs-24 fw-600">
              Froidville-en-Soupir
            </span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/nether"}
          >
            <span className="teaui text fs-24 fw-600">Nether</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-corail text-link"
            to={"/societes/gare-connexions/rouille-sur-acier"}
          >
            <span className="teaui text fs-24 fw-600">Rouille-sur-Acier</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageGareConnection;
