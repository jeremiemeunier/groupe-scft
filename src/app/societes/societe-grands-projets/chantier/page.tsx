import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos chantiers — SCFT",
};

const PageChantier = () => {
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
            <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text lh-100 fs-72">
              Rejoindre l&apos;end en seulement 1h20
            </h2>
            <div className="teaui grid pl40">
              <p>
                Comment sommes nous en train de réaliser le plus grand chantier
                ferroviaire de toutes la TeuTeuLandie en créant une liaison
                directe entre le Grand Centre du Monde et l&apos;End ?
              </p>
              <Link
                href={
                  "/societes/societe-grands-projets/chantier/spawn-end-1h20"
                }
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
            <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text lh-100 fs-72">
              Prolongement de la voie du Nord
            </h2>
            <div className="teaui grid pl40">
              <p>
                Parce qu&apos;on a remarqué qu&apos;il y avait encore de la
                place pour poser des rails là-bas ! Avec cette extension, les
                Teuteus du Nord pourront enfin dire : &quot;On n’est plus
                perdus, on a une gare !&quot; Un projet ambitieux pour
                rapprocher les gens, même si ça rallonge un peu le planning des
                trains.
              </p>
              <Link
                href={""}
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
            <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text lh-100 fs-72">
              Liaison complète Spawn - Usine à Fer
            </h2>
            <div className="teaui grid pl40">
              <p>
                Parce qu&apos;on ne pouvait pas laisser une usine à fer aussi
                grande sans une ligne directe pour transporter les gens et les
                matériaux ! Ce projet, c’est un peu comme relier deux bouts d’un
                puzzle qu’on avait oubliés. Plus pratique, plus rapide… enfin,
                en théorie.
              </p>
              <Link
                href={""}
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
