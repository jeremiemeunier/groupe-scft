import { Link } from "react-router-dom";

const PartHeroHeader = () => {
  return (
    <div
      className="teaui grid format-page sf radius-small mt80"
      style={{
        background: "url(/imgs/background/gradient.png",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="teaui grid format-page sl sv-70 va-center">
        <h1 className="teaui mb80">
          Vous transporter,
          <br />
          notre métier.
        </h1>

        <div className="teaui grid tac">
          <Link
            to={""}
            className="teaui cta format-icon-right level-primary sl"
          >
            <span>En savoir plus</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
          <Link
            to={""}
            className="teaui cta format-icon-right level-tertiary sl"
          >
            <span>Faire carrière</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartHeroHeader;
