import { useEffect } from "react";

const PageGareConnection = () => {
  useEffect(() => {
    document.title = "Gare & Connexions — TeuTeuTrain Company";
  }, []);

  return (
    <div>
      <div className="teaui grid bg-corail va-center sv-80">
        <div className="teaui grid format-page sl">
          <p className="teaui text fs-80 fw-900">Gare & Connexions</p>
          <div className="teaui grid tc-2">
            <p className="teaui mt80">
              Ponts audacieux, tunnels interminables, et lignes de train
              mythiques : aucun défi n’est trop grand pour cette équipe
              d’experts… ou presque.
            </p>
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
    </div>
  );
};

export default PageGareConnection;
