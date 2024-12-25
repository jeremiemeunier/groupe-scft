import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@part/PartEmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

type PropType = {
  slides: { media: string; link: string; label: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="teaui grid format-page sl embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, key) => (
            <Link
              to={`/gare-connexions/${slide.link}`}
              className="embla__slide"
              key={key}
              title={slide.label}
            >
              <img
                src={slide.media}
                className="teaui media shape-round"
                width={"100%"}
                alt=""
              />
              <h2>{slide.label}</h2>
            </Link>
          ))}
        </div>
      </div>

      <div className="teaui grid cta-container cgs-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
