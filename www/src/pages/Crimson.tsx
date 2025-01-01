import { ThemeContext } from "@context/ThemeContext";
import { useContext, useEffect } from "react";

const PageCrimson = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title =
      "Crismon : Vous transportez entre les dimensions — TeuTeuTrain Company";
    setShade("bleu-marine-reverse");
  }, []);

  return (
    <div className="teaui grid rgs-120">
      <div className="teaui grid text bg-bleu-marine-reverse va-center sv-80">
        <div className="teaui grid tc-2 format-page sl">
          <div className="teaui grid">
            <img src="/imgs/crimson_logo_text_color.svg" height={48} alt="" />
            <p className="teaui text lh-100 fs-80 fw-900 text color-corail-reverse">
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
        <div className="teaui grid tc-3 cgs-32">
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">1.2</p>
              <p className="teaui text fs-24 pa0 ma0">
                millions de litres de lave sécurisé (ou presque) de chaques coté
                des voies
              </p>
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">269</p>
              <p className="teaui text fs-24 pa0 ma0">
                ghast et wither squelette préservé par la plan "1 gare, 1
                nether".
              </p>
            </div>
          </div>
          <div className="teaui card">
            <div className="teaui pa24">
              <p className="teaui text ff-title fs-64 fw-700 pa0 ma0">1 430</p>
              <p className="teaui text fs-24 pa0 ma0">
                bouteilles de potions servies dans nos wagons-bars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCrimson;
