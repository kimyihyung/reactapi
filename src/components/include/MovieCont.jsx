import React from "react";

function MovieCont({ movies }) {
  console.log({ movies });
  return (
    <section className="cont_movie">
      <div className="container">
        <div className="movie__inner">
          <div className="movie_box"></div>
        </div>
      </div>
    </section>
  );
}

export default MovieCont;
