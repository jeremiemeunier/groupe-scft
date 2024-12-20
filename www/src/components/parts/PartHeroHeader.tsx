import { Link } from "react-router-dom";

const PartHeroHeader = () => {
  return (
    <div
      className="teaui grid format-page sxl radius-small shadow browser mt80"
      style={{
        background:
          "url(https://images.pexels.com/photos/258444/pexels-photo-258444.jpeg",
        backgroundSize: "100%",
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
            className="teaui cta format-icon-right level-secondary sl"
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
