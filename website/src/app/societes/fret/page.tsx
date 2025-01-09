import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCFT FRET — SCFT",
};

const PageFret = () => {
  return (
    <div className="teaui grid rgs-120">
      <div className="teaui grid bg-vert-menthe va-center sv-80">
        <div className="teaui grid format-page sl">
          <p className="teaui text fs-80 fw-900">
            Transporter les biens essentiels
          </p>
          <div className="teaui grid tc-2">
            <p>
              Avec SCFT FRET, vos marchandises sont entre de bonnes mains… ou du
              moins dans des wagons qui avancent (parfois même dans la bonne
              direction) !
            </p>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Notre mission</h2>
        <p>
          Transporter les biens essentiels (et parfois inutiles) pour faire
          tourner l’économie de Teuteuland. Avec des wagons robustes et des
          itinéraires qui défient toute logique, notre mission est de connecter
          les usines, les entrepôts et les ports… quand les rails ne sont pas
          trop rouillés.
        </p>
      </div>

      <div className="teaui grid format-page sl">
        <h2>Les chiffres clés</h2>
        <div className="teaui grid va-start tc-3 cgs-32">
          <div className="teaui card mt40">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">1000t</p>
              <p className="teaui text fs-24 pa0 ma0">
                de blé en pleine saison des inondations (seulement 100 sacs
                perdus !)
              </p>
            </div>
          </div>
          <div className="teaui card mt120">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">300km</p>
              <p className="teaui text fs-24 pa0 ma0">
                pour ravitailler une centrale avant qu’elle ne s’éteigne (record
                battu : 3 jours de retard)
              </p>
            </div>
            <img src="/imgs/assets/media_track.webp" width={"100%"} alt="" />
          </div>
          <div className="teaui card">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text fs-24 pa0 ma0">
                Convoyer une sculpture de{" "}
              </p>
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">
                12 tonnes
              </p>
              <p className="teaui text fs-24 pa0 ma0">
                sans casser plus de deux morceaux
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Transporter tout… ou presque !</h2>
        <p>
          Filiale incontournable de la SCFT, SCFT FRET est le pilier du
          transport de marchandises en Teuteuland. Du charbon à l’art moderne en
          passant par des chargements mystérieux (qu’on préfère ne pas ouvrir),
          SCFT FRET s’engage à livrer tout, partout, et parfois même dans les
          délais prévus.
        </p>
      </div>
    </div>
  );
};

export default PageFret;
