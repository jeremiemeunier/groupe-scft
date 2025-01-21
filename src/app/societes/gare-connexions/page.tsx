import SectionAllGare from "@section/SectionAllGare";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gare & Connexions — SCFT",
};

const PageGareConnection = () => {
  return (
    <div className="teaui grid rgs-120">
      <div className="teaui grid rgs-0 bg-corail">
        <div
          className="teaui grid sv-60"
          style={{
            backgroundImage: "url(/imgs/pictures/spawn_from_north.webp)",
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
                Créer, rénover et maintenir des gares accueillantes (ou du moins
                fonctionnelles).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Pourquoi Gare & Connexions ?</h2>
        <p>
          Filiale essentielle de la SCFT, Gare & Connexion veille sur toutes les
          gares de Teuteuland, de la plus grande à la plus improbable. Entre les
          horaires parfois fantaisistes, les quais numérotés sans logique, et
          les distributeurs de billets qui vendent tout sauf des billets, Gare &
          Connexion est là pour offrir une expérience inoubliable aux voyageurs.
        </p>
      </div>

      <div className="teaui grid format-page sl">
        <h2>Les chiffres clés</h2>
        <div className="teaui grid va-start tc-3 cgs-32">
          <div className="teaui card mt40">
            <div className="teaui text-container ratio-square">
              <Image fill src="/imgs/assets/media_agents.webp" alt="" />
            </div>
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">12,5</p>
              <p className="teaui text fs-24 pa0 ma0">
                agents à votre service dans nos gares
              </p>
            </div>
          </div>
          <div className="teaui card mt120">
            <div className="teaui pa24 text-container ratio-square">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">5</p>
              <p className="teaui text fs-24 pa0 ma0">
                gare couverte par le plan &apos;Un banc, un toit&apos;
              </p>
            </div>
            <div className="teaui text-container ratio-square">
              <Image fill src="/imgs/assets/media_gare.webp" alt="" />
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui">
              <div className="teaui text-container ratio-square">
                <Image fill src="/imgs/assets/media_worker.webp" alt="" />
              </div>
              <div className="teaui grid pa24 text-container ratio-square">
                <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">5000</p>
                <p className="teaui text fs-24 pa0 ma0">
                  ouvriers mobilisés, dont 800 pour retrouver les outils égarés.
                </p>
              </div>
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

      <SectionAllGare />
    </div>
  );
};

export default PageGareConnection;
