import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function MoviePop({ popular, index }) {
  const poster = popular.poster_path
    ? `https://image.tmdb.org/t/p/w500/${popular.poster_path}`
    : "";

  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${popular.id}`}
        target="_blank"
        rel="noreferrer"
      >
        {poster ? (
          <img src={poster} alt={popular.title || "영화 포스터"} />
        ) : (
          <span className="poster-empty">NO IMAGE</span>
        )}
        <em>
          <span className="ranking">{index + 1}</span>
          <span className="title">{popular.title || "제목 없음"}</span>
        </em>
      </a>
    </li>
  );
}

const MoviePopular = ({ popular }) => {
  const list = Array.isArray(popular)
    ? popular.filter((movie) => movie && movie.id).slice(0, 10)
    : [];

  if (list.length === 0) return null;

  return (
    <section className="movie__popular">
      <div className="container">
        <div className="popular__inner">
          <h2>Popular Ranking</h2>
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            initialSlide={list.length > 3 ? 3 : 0}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {list.map((movie, index) => (
              <SwiperSlide key={`${movie.id}-${index}`}>
                <MoviePop popular={movie} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoviePopular;
