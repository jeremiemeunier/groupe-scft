import Link from "next/link";

const PartHeroHeader = () => {
  return (
    <>
      <div className="teaui grid bg-burgundy-reverse">
        <div className="teaui grid format-page sl tc-2 pt160 pb160">
          <div className="teaui grid">
            <p className="teaui text lh-100 fs-80 ff-title fw-900">
              Vous transporter, notre métier.
            </p>
            <p>
              Vous avez toujours voulu travailler dans une entreprise où les
              rails ne mènent pas toujours là où on pense ? À la SCFT, on ne
              cherche pas la perfection, on cherche des gens prêts à embarquer
              dans une aventure unique. Posez des questions, perdez vos outils,
              mais surtout : faites avancer nos trains (quand ils démarrent) !
            </p>

            <div className="teaui grid tac va-end">
              <Link
                href={""}
                className="teaui cta format-icon-right level-primary color-burgundy-reverse sl"
              >
                <span>En savoir plus</span>
                <i className="icon teaui-icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartHeroHeader;
