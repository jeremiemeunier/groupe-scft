import { ThemeContext } from "@context/ThemeContext";
import { useContext, useEffect } from "react";

const PageCrimson = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title =
      "Crismon : Vous transportez entre les dimensions — TeuTeuTrain Company";
    setShade("corail-reverse");
  }, []);

  return (
    <>
      <div className="teaui grid text bg-corail-reverse va-center sv-80">
        <div className="teaui grid tc-2 format-page sl">
          <div className="teaui grid">
            <img src="/imgs/crimson_logo_text.svg" height={48} alt="" />
            <p className="teaui text lh-100 fs-80 fw-900 text color-bleu-marine-reverse">
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
    </>
  );
};

export default PageCrimson;
