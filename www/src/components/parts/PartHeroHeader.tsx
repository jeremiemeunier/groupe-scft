import { Link } from "react-router-dom";

const PartHeroHeader = () => {
  return (
    <div className="teaui grid format-page sf tc-2">
      <div className="teaui grid bg-ocre radius-small mt80">
        <div className="teaui grid sv-70 rc-1 pa80">
          <p className="teaui text fs-80 fw-900">
            Vous transporter, notre métier.
          </p>
          <p>
            Vous avez toujours voulu travailler dans une entreprise où les rails
            ne mènent pas toujours là où on pense ? À la TTT, on ne cherche pas
            la perfection, on cherche des gens prêts à embarquer dans une
            aventure unique. Posez des questions, perdez vos outils, mais
            surtout : faites avancer nos trains (quand ils démarrent) !
          </p>

          <div className="teaui grid tac va-end">
            <Link
              to={""}
              className="teaui cta format-icon-right level-primary color-ocre sl"
            >
              <span>En savoir plus</span>
              <i className="icon teaui-icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="teaui grid bg-cobalt-reverse radius-small mt80">
        <div className="teaui grid sv-70 rc-1 pa80">
          <p className="teaui text fs-80 fw-900">
            Pour des projets
            <br />
            (trop) grands
          </p>
          <p>
            Vous rêvez de travailler sur des chantiers gigantesques où chaque
            jour est une nouvelle énigme ? À la Société des Grands Projets, on
            ne cherche pas des experts, on cherche des Teuteus motivés ! Posez
            des rails, creusez des tunnels, ou essayez juste de retrouver les
            plans… ici, tout est possible (surtout l’improbable).
          </p>

          <div className="teaui grid tac va-end">
            <Link
              to={""}
              className="teaui cta format-icon-right level-primary color-cobalt-reverse sl"
            >
              <span>Faire carrière</span>
              <i className="icon teaui-icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartHeroHeader;
