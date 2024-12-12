const SectionGare = () => {
  return (
    <div className="teaui grid format-page sl mt80">
      <h2>Nos gares</h2>
      <div className="teaui grid tc-3">
        <div className="teaui grid shape-square pa0">
          <img
            src="./imgs/canvas/gare-est-1000.png"
            className="teaui media shape-round"
            width={"100%"}
            alt=""
          />
        </div>
        <div className="teaui grid shape-square pa0">
          <img
            src="./imgs/canvas/gare-nord-1000.png"
            className="teaui media shape-round"
            width={"100%"}
            alt=""
          />
        </div>
        <div className="teaui grid shape-square pa0">
          <img
            src="./imgs/canvas/gare-ouest-1000.png"
            className="teaui media shape-round"
            width={"100%"}
            alt=""
          />
        </div>
        <div className="teaui grid shape-square pa0">
          <img
            src="./imgs/canvas/gare-sud-1000.png"
            className="teaui media shape-round"
            width={"100%"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionGare;
