import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

function UnsplashRandom({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.regular} alt={random.urls.alt_description} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="unsplash__inner">
          <h2>Unsplash Random</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashRandom key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
