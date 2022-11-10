import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function MoviePop(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`}
          alt={props.popular.title}
        />
        <em>
          <span className="ranking">{props.index + 1}</span>
          <span className="title">{props.popular.title}</span>
          {/* <span className="star">★ : {props.popular.vote_average}</span> */}
        </em>
      </a>
    </li>
  );
}

const MoviePopular = (props) => {
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
            initialSlide="3"
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
            {props.popular.map((popular, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <MoviePop key={index} popular={popular} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoviePopular;
