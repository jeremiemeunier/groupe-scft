import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@part/PartEmblaCarousel";
import "../../styles/bin/Embla.scss";

const SectionGare = () => {
  const OPTIONS: EmblaOptionsType = { align: "start", dragFree: true };
  const SLIDES = [
    { media: "./imgs/canvas/gare-est-1000.png" },
    { media: "./imgs/canvas/gare-nord-1000.png" },
    { media: "./imgs/canvas/gare-ouest-1000.png" },
    { media: "./imgs/canvas/gare-sud-1000.png" },
    { media: "./imgs/canvas/gare-nether.png" },
    { media: "./imgs/canvas/gare-ouest-usine-fer.png" },
  ];

  return (
    <div className="teaui grid format-page sl mt80">
      <h2>Nos gares</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default SectionGare;
