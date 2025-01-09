import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Rejoindre l'End en seulement 1h20 — Société des Grands Projets — SCFT",
};

const PageChantierArticle = () => {
  return (
    <div>
      <div className="teaui grid background bg-nude pt80">
        <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
          <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
            Rejoindre l'end en seulement 1h20
          </h2>
          <div className="teaui grid pl40">
            <p>
              Comment sommes nous en train de réaliser le plus grand chantier
              ferroviaire de toutes la TeuTeuLandie en créant une liaison
              directe entre le Grand Centre du Monde et l'End ?
            </p>
          </div>
        </div>
      </div>
      <div className="teaui grid format-page pa64">
        <h3>Un défi technique hors norme</h3>
        <p>
          Le chantier traverse des terrains variés, allant de vastes plaines à
          des zones marécageuses où chaque rail doit être soigneusement posé
          pour éviter qu’il ne s’enfonce. "On a même découvert un ancien nid de
          pigeons sacrés sur le tracé !", explique Marcel, chef des travaux.
          Après trois jours de cérémonie pour apaiser les esprits des pigeons,
          les travaux ont pu reprendre.
        </p>
      </div>
      <div className="teaui grid format-page sl">
        <h2>Les chiffres clés</h2>
        <div className="teaui grid va-start tc-3 cgs-32">
          <div className="teaui card mt40">
            <img src="/imgs/assets/media_track.webp" width={"100%"} alt="" />
            <div className="teaui text-container ratio-square pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">132km</p>
              <p className="teaui text fs-24 pa0 ma0">
                de rail posé sans les virages
              </p>
            </div>
          </div>
          <div className="teaui card mt120">
            <div className="teaui text-container ratio-square pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">18</p>
              <p className="teaui text fs-24 pa0 ma0">
                tunnels creusés à la main (ou presque)
              </p>
            </div>
          </div>
          <div className="teaui card">
            <img src="/imgs/assets/media_worker.webp" width={"100%"} alt="" />
            <div className="teaui text-container ratio-square pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">5000</p>
              <p className="teaui text fs-24 pa0 ma0">
                ouvriers mobilisés, dont 800 pour retrouver les outils égarés.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h3>Un projet pour l’histoire</h3>
        <p>
          La SCFT espère inaugurer cette voie d’ici 7 ans (ou 10, selon les
          aléas). Quoi qu’il en soit, ce chantier s’annonce déjà comme une
          prouesse technique et une nouvelle fierté pour la Raie Publique. "Un
          jour, on racontera ça à nos petits Teuteus !", conclut un ouvrier.
        </p>
      </div>
    </div>
  );
};

export default PageChantierArticle;
