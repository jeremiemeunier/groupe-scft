import { Link } from "react-router-dom";

const PartHeroHeader = () => {
  return (
    <div className="teaui grid format-page sf tc-3">
      <div className="teaui grid bg-ocre radius-small mt80">
        <div className="teaui grid grid-row-fr sv-70 rc-1 pa80">
          <h1 className="teaui mb80">
            Vous transporter,
            <br />
            notre métier.
          </h1>

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
      <div className="teaui grid bg-foret radius-small mt80">
        <div className="teaui grid grid-row-fr sv-70 rc-1 pa80">
          <h1 className="teaui mb80">
            Vous transporter,
            <br />
            notre métier.
          </h1>

          <div className="teaui grid tac va-end">
            <Link
              to={""}
              className="teaui cta format-icon-right level-primary color-foret sl"
            >
              <span>Faire carrière</span>
              <i className="icon teaui-icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="teaui grid bg-ceruleen radius-small mt80">
        <div className="teaui grid grid-row-fr sv-70 pa80">
          <h1 className="teaui mb80">
            Vous transporter,
            <br />
            notre métier.
          </h1>

          <div className="teaui grid tac va-end">
            <Link
              to={""}
              className="teaui cta format-icon-right level-primary color-ceruleen sl"
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
