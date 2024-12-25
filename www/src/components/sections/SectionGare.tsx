import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@part/PartEmblaCarousel";
import "../../styles/bin/Embla.scss";

const SectionGare = () => {
  const OPTIONS: EmblaOptionsType = { align: "start", dragFree: true };
  const SLIDES = [
    {
      media: "./imgs/canvas/gare-est-1000-shape.png",
      link: "ailleurs-sur-loin",
      label: "Ailleurs-sur-Loin",
    },
    {
      media: "./imgs/canvas/gare-nord-1000-shape.png",
      link: "soleil-en-vadrouille",
      label: "Soleil-en-Vadrouille",
    },
    {
      media: "./imgs/canvas/gare-ouest-1000-shape.png",
      link: "bordures-les-finis",
      label: "Bordure-Lès-Finis",
    },
    {
      media: "./imgs/canvas/gare-sud-1000-shape.png",
      link: "froidville-en-soupir",
      label: "Froidville-en-Soupir",
    },
    {
      media: "./imgs/canvas/gare-nether-shape.png",
      link: "nether",
      label: "Nether",
    },
    {
      media: "./imgs/canvas/gare-ouest-usine-fer-shape.png",
      link: "rouille-sur-acier",
      label: "Rouille-sur-Acier",
    },
  ];

  return (
    <div className="teaui grid format-page sl mt80">
      <h2>Nos gares</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default SectionGare;
