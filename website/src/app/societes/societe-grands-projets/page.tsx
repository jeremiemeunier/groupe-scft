import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Société des Grands Projets — TeuTeuTrain Company",
};

const PageSocietyLargeProject = () => {
  return (
    <div className="teaui grid rgs-120">
      <div className="teaui grid bg-dark-cobalt-reverse va-center sv-80">
        <div className="teaui grid format-page sl">
          <p className="teaui text lh-100 fs-80 fw-900">
            Pour des projets
            <br />
            (trop) grands
          </p>
          <div className="teaui grid tc-2">
            <p>
              Ponts audacieux, tunnels interminables, et lignes de train
              mythiques : aucun défi n’est trop grand pour cette équipe
              d’experts… ou presque.
            </p>
          </div>
        </div>
      </div>

      <div className="teaui grid format-page pa64">
        <h2>Notre mission</h2>
        <p>
          La SGP a pour ambition de connecter, transformer et magnifier
          Teuteuland grâce à des infrastructures modernes (ou du moins
          fonctionnelles). Avec un savoir-faire unique et une passion pour les
          défis techniques improbables, la SGP ne recule devant rien, quitte à
          prendre quelques détours.
        </p>
        <p>
          La SGP, c’est l’assurance que les plus grandes idées de Teuteuland
          deviennent réalité, même si parfois, il faut un peu de créativité pour
          arriver au bout !
        </p>
      </div>

      <div className="teaui grid format-page sl pt64 ms-pt64 xs-pt64 pb64 ms-pb64 xs-pb64">
        <h2>Nos réalisations</h2>

        <div className="teaui grid cgs-24 tc-3">
          <Link
            href={"/societes/societe-grands-projets/chantier/spawn-end-1h20"}
            className="teaui card no-shadow border background pa32"
          >
            <h4 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 ff-title xs-ma0 text fs-40">
              Rejoindre l'end en seulement 1h20
            </h4>
            <p className="teaui mt40">
              Comment sommes nous en train de réaliser le plus grand chantier
              ferroviaire de toutes la TeuTeuLandie en créant une liaison
              directe entre le Grand Centre du Monde et l'End ?
            </p>
          </Link>
          <Link
            href={"/societes/societe-grands-projets/chantier/prolongement-nord"}
            className="teaui card no-shadow border background pa32"
          >
            <h4 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 ff-title xs-ma0 text fs-40">
              Prolongement de la voie du Nord
            </h4>
            <p className="teaui mt40">
              Parce qu’on a remarqué qu’il y avait encore de la place pour poser
              des rails là-bas ! Avec cette extension, les Teuteus du Nord
              pourront enfin dire : "On n’est plus perdus, on a une gare !" Un
              projet ambitieux pour rapprocher les gens, même si ça rallonge un
              peu le planning des trains.
            </p>
          </Link>
          <Link
            href={
              "/societes/societe-grands-projets/chantier/rejoindre-le-pays-du-soleil-levant"
            }
            className="teaui card no-shadow border background pa32"
          >
            <h4 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 ff-title xs-ma0 text fs-40">
              Direction : Le Pays du Soleil Levant
            </h4>
            <p className="teaui mt40">
              Parce qu’on a remarqué qu’il y avait encore de la place pour poser
              des rails là-bas ! Avec cette extension, les Teuteus du Nord
              pourront enfin dire : "On n’est plus perdus, on a une gare !" Un
              projet ambitieux pour rapprocher les gens, même si ça rallonge un
              peu le planning des trains.
            </p>
          </Link>
        </div>
      </div>

      <div className="teaui grid pa80 ms-pa80 xs-pa80 bg-dark-cobalt-reverse">
        <div className="teaui grid format-page">
          <h3>La SCP recrute !</h3>
          <p>
            Vous rêvez de travailler sur des chantiers gigantesques où chaque
            jour est une nouvelle énigme ? À la Société des Grands Projets, on
            ne cherche pas des experts, on cherche des Teuteus motivés ! Posez
            des rails, creusez des tunnels, ou essayez juste de retrouver les
            plans… ici, tout est possible (surtout l’improbable).
          </p>

          <Link
            href={""}
            className="teaui cta format-icon-right level-primary color-cobalt-reverse sl"
          >
            <span>Faire carrière</span>
            <i className="icon teaui-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageSocietyLargeProject;
