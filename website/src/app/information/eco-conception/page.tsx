import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre engagement pour l’éco-conception — TeuTeuTrain Company",
};

const PageEcoBuild = () => {
  return (
    <>
      <div className="teaui grid bg-foret-reverse sv-80 va-center text color-foret">
        <div className="teaui grid format-page sl">
          <p className="teaui text lh-100 fs-80 fw-900">
            Notre engagement pour l’éco-conception
          </p>
          <div className="teaui grid tc-2">
            <p>
              Notre site web est éco-conçu. Ce n’est pas juste un mot, c’est un
              engagement. L’objectif : minimiser son empreinte environnementale
              tout en offrant une expérience optimale aux utilisateurs.
            </p>
          </div>
        </div>
      </div>

      <div className="teaui grid rgs-120 format-page sm pt80">
        <div className="teaui grid">
          <h3>1. Réduire la taille des pages</h3>
          <p>
            Nous compressons systématiquement les logos, images, et tous les
            éléments graphiques. À cet effet nous utilisons un format de
            compression webp pour les photos.
          </p>
          <p>
            La page d’accueil fait l’objet d’un soin particulier pour en
            maximiser la lisibilité et la légèreté.
          </p>
        </div>

        <div className="teaui grid">
          <h3>2. Proposer des liens plutôt qu’héberger des contenus</h3>
          <p>
            Nous préférons proposer des contenus sans les dupliquer ni les
            héberger. Sur les vidéos notamment, nous faisons en sorte que le
            poids de la vidéo ne soit pas supporté par le site, et qu’il ne soit
            pas pris en compte au chargement de la page mais au lancement de la
            vidéo. Le gain côté stockage se compte en dizaines ou centaines de
            giga octets.
          </p>
        </div>

        <div className="teaui grid">
          <h3>3. Optimiser les parcours et les pages les plus vues</h3>
          <p>
            Les 10 pages les plus visitées sont systématiquement optimisées avec
            une taille maximale pour limiter la bande passante réseau utilisée.
            L’objectif est de fournir les meilleures performances utilisateurs
            possibles sur les contenus plébiscités.
          </p>
        </div>

        <div className="teaui grid">
          <h3>4. Tester le site en 3G</h3>
          <p>
            Tester les pages en conditions de connexion 3G permet de s’assurer
            que le site groupe-sncf.com est accessible depuis « n’importe où »
            en mobilité, y compris les territoires où la 4G ou la 5G ne sont pas
            disponibles.
          </p>
        </div>

        <div className="teaui grid">
          <h3>5. Réduire la taille des documents</h3>
          <p>
            Les documents, notamment légaux, sont compressés et ne dépassent
            jamais les 25 méga octets. La grande majorité pèsent beaucoup moins
            mais certains documents juridiques ne peuvent pas être plus
            compressés, mais tous les métiers sont sensibilisés à cette nouvelle
            contrainte. Multiplié par le nombre de téléchargements annuels, ce
            sont des économies de stockage et de bande passante par rapport à
            l’ancien site sncf.com.
          </p>
        </div>

        <div className="teaui grid">
          <h3>6. Optimiser le front et le back</h3>
          <p>
            Notre site utilise un CMS pour le back office et un front office
            dédié. Des experts ont travaillé sur les meilleures pratiques
            d’utilisation du logiciel : réduction du nombre d’appel au serveur,
            utilisation du cache pour limiter la consommation, mise en place
            d’un système de nettoyage régulier de la base de données, etc.
          </p>
        </div>

        <div className="teaui grid">
          <h3>7. Sensibiliser les équipes</h3>
          <p>
            Toutes les équipes métier (projet, développement, UX UI) ont été
            sensibilisées à ces nouveaux usages et des formations techniques
            dédiées sont prodiguées. De même, au-delà du site, toutes les
            équipes projet sont sensibilisées à la réduction de leur empreinte
            carbone pour leur espace de travail personnel (suppression des
            mails, des fichiers volumineux, etc…).
          </p>
        </div>

        <div className="teaui grid">
          <h3>8. Utiliser une charte graphique éco-conçue</h3>
          <p>
            La charte du site Groupe a été conçue avec cette optique de
            réduction de la consommation : espace aéré, pas de dégradé, option
            mode sombre…
          </p>
        </div>
      </div>
    </>
  );
};

export default PageEcoBuild;
