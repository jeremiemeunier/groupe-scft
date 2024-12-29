import { ThemeContext } from "@context/ThemeContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const PageChantier = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    setShade("");
  }, []);

  return (
    <div className="teaui grid rgs-0 mt120">
      <div className="teaui grid sv-40 va-center format-page sl">
        <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
          Nos chantiers
        </h2>
      </div>

      <div className="teaui grid">
        <div className="teaui grid format-page sxl radius-small background bg-nude mt40">
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
              <Link
                to={"/societes/societe-grands-projets/chantier/spawn-end-1h20"}
                className="teaui cta color-nude level-primary format-icon-right"
              >
                <i className="icon teaui-icon-arrow-right"></i>
                <span>En savoir plus</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="teaui grid format-page sxl radius-small background bg-ceruleen">
          <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
            <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
              Prolongement de la voie du Nord
            </h2>
            <div className="teaui grid pl40">
              <p>
                Parce qu’on a remarqué qu’il y avait encore de la place pour
                poser des rails là-bas ! Avec cette extension, les Teuteus du
                Nord pourront enfin dire : "On n’est plus perdus, on a une gare
                !" Un projet ambitieux pour rapprocher les gens, même si ça
                rallonge un peu le planning des trains.
              </p>
              <Link
                to={""}
                className="teaui cta color-ceruleen level-primary format-icon-right"
              >
                <i className="icon teaui-icon-arrow-right"></i>
                <span>En savoir plus</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="teaui grid format-page sxl radius-small background bg-cobalt-reverse">
          <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
            <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
              Liaison complète Spawn - Usine à Fer
            </h2>
            <div className="teaui grid pl40">
              <p>
                Parce qu'on ne pouvait pas laisser une usine à fer aussi grande
                sans une ligne directe pour transporter les gens et les
                matériaux ! Ce projet, c’est un peu comme relier deux bouts d’un
                puzzle qu’on avait oubliés. Plus pratique, plus rapide… enfin,
                en théorie.
              </p>
              <Link
                to={""}
                className="teaui cta color-cobalt-reverse level-primary format-icon-right"
              >
                <i className="icon teaui-icon-arrow-right"></i>
                <span>En savoir plus</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageChantier;
