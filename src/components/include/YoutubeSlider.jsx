import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";

function YoutubeRan({ random }) {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${random.id}`}
        target="_blank"
        rel="noreferrer"
      >
        {random.thumb ? (
          <img src={random.thumb} alt={random.title} />
        ) : (
          <span className="poster-empty">NO IMAGE</span>
        )}
      </a>
    </li>
  );
}

const YoutubeSlider = ({ random }) => {
  const list = Array.isArray(random)
    ? random.filter((video) => video && video.id).slice(0, 10)
    : [];

  if (list.length === 0) return null;

  return (
    <section className="youtube__popular">
      <div className="container">
        <div className="youtube__inner">
          <h2>Youtube Random</h2>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            {list.map((video, index) => (
              <SwiperSlide key={`${video.id}-${index}`}>
                <YoutubeRan random={video} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
