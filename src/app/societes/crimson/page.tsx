import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crismon : Vous transportez entre les dimensions — SCFT",
};

const PageCrimson = () => {
  return (
    <div className="teaui grid rgs-120">
      <div className="teaui grid text bg-bleu-marine-reverse va-center sv-80">
        <div className="teaui grid tc-2 format-page sl">
          <div className="teaui grid">
            <Image src="/imgs/crimson_logo_text_color.svg" height={48} alt="" />
            <p className="teaui text lh-100 fs-80 ff-title fw-900 text color-corail-reverse">
              Le train interdimensionnel haut de gamme
            </p>
            <p>
              Offrir une alternative confortable (ou du moins pas trop
              dangereuse) pour voyager entre Overworld et Nether. Notre tunnel
              sécurisé garantit un trajet sans Ghasts ni lave (ou presque).
            </p>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Notre mission</h2>
        <p>
          Repousser les frontières… littéralement ! Première entreprise
          ferroviaire interdimensionnelle, Crimson propose des trajets rapides
          et (relativement) sûrs vers le Nether. Que vous soyez aventurier,
          commerçant de quartz, ou simplement curieux, NetherExpress vous emmène
          au cœur des terres rouges brûlantes.
        </p>
      </div>

      <div className="teaui grid format-page sl">
        <h2>Les chiffres clés</h2>
        <div className="teaui grid tc-3 va-start cgs-32">
          <div className="teaui card mt40">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">1.2</p>
              <p className="teaui text fs-24 pa0 ma0">
                millions de litres de lave sécurisé (ou presque) de chaques coté
                des voies
              </p>
            </div>
          </div>
          <div className="teaui card mt120">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">269</p>
              <p className="teaui text fs-24 pa0 ma0">
                ghast et wither squelette préservé par la plan &quot;1 gare, 1
                nether&quot;.
              </p>
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">1 430</p>
              <p className="teaui text fs-24 pa0 ma0">
                bouteilles de potions servies dans nos wagons-bars.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid text bg-bleu-marine-reverse va-center pt80 pb80">
        <div className="teaui grid rgs-0 format-page sl">
          <h2>En découvrir plus</h2>
          <Link
            className="teaui color shade-bleu-marine-reverse text-link"
            href={"/societes/crimson/nos-connexions"}
          >
            <span className="teaui text fs-24 fw-600">Nos connexions</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            className="teaui color shade-bleu-marine-reverse text-link"
            href={"/societes/societe-grands-projets"}
          >
            <span className="teaui text fs-24 fw-600">
              Société des Grands Projets
            </span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageCrimson;
