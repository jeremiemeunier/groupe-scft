import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@part/PartEmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: { media: string }[];
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
            <div className="embla__slide" key={key}>
              <img
                src={slide.media}
                className="teaui media shape-round"
                width={"100%"}
                alt=""
              />
            </div>
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
