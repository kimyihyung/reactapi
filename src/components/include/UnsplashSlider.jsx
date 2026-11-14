import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const getHref = (item) => {
  if (item.links && item.links.html) return item.links.html;
  if (item.id && !String(item.id).startsWith("photo-")) {
    return `https://unsplash.com/photos/${item.id}`;
  }
  const keyword = Array.isArray(item.keywords) ? item.keywords[0] : "";
  return keyword
    ? `https://unsplash.com/s/photos/${encodeURIComponent(keyword)}`
    : "https://unsplash.com/";
};

function UnsplashRandom({ random }) {
  const src =
    (random.urls && (random.urls.regular || random.urls.small)) || "";
  const alt =
    random.alt_description || random.description || "Unsplash 이미지";

  return (
    <li>
      <a href={getHref(random)} target="_blank" rel="noreferrer">
        <img src={src} alt={alt} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  const list = Array.isArray(random)
    ? random
        .filter(
          (item) => item && item.urls && (item.urls.regular || item.urls.small)
        )
        .slice(0, 10)
    : [];

  if (list.length === 0) return null;

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
            {list.map((item, index) => (
              <SwiperSlide key={item.id || `slide-${index}`}>
                <UnsplashRandom random={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
