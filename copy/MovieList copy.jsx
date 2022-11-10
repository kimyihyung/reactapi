import React from "react";

function MoviePop(props) {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
          className="movie_img"
        />
        <em>
          <span className="title">{props.movie.title}</span>
          <span className="star">{props.movie.vote_average}</span>
          <span className="rank">{props.index + 1}</span>
        </em>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  return (
    <section className="movie__list">
      <h2>Popular Movies</h2>
      <div className="container">
        <div className="list__inner">
          <ul>
            {props.lists.map((movies, index) => (
              <MoviePop key={index} movie={movies} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
