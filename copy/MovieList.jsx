import React from "react";

function MoviePop(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <em>
          <span className="title">{props.movie.title}</span>
          <span className="star">{props.movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
}
//console.log({ movielist });
function MovieList(props) {
  return (
    <section className="list_movie">
      <div className="container">
        <div className="movie__list">
          <ul>
            {props.movielist.map((movielist, index) => (
              <MoviePop key={index} movie={movielist} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MovieList;
