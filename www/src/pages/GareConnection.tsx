import { useEffect } from "react";

const PageGareConnection = () => {
  useEffect(() => {
    document.title = "Gare & Connexions — TeuTeuTrain Company";
  }, []);

  return (
    <div>
      <div className="teaui grid bg-corail va-center sv-80">
        <div className="teaui grid format-page sl">
          <p className="teaui text fs-80 fw-900">Gare & Connexions</p>
          <div className="teaui grid tc-2">
            <p className="teaui mt80">
              Ponts audacieux, tunnels interminables, et lignes de train
              mythiques : aucun défi n’est trop grand pour cette équipe
              d’experts… ou presque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageGareConnection;
