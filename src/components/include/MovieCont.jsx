import React from "react";

function MovieItem({ movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";
  const score = Number(movie.vote_average);

  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        {poster ? (
          <img src={poster} alt={movie.title || "영화 포스터"} loading="lazy" />
        ) : (
          <span className="poster-empty">NO IMAGE</span>
        )}
        <em>
          <span className="title">{movie.title || "제목 없음"}</span>
          {Number.isFinite(score) && score > 0 ? (
            <span className="star">{score.toFixed(1)}</span>
          ) : null}
        </em>
      </a>
    </li>
  );
}

function MovieCont({ movies, loading, emptyText }) {
  // API 응답이 배열이 아니거나 비어 있어도 화면이 깨지지 않게 항상 배열로 다룹니다.
  const list = Array.isArray(movies)
    ? movies.filter((movie) => movie && movie.id)
    : [];

  return (
    <section className="cont_movie">
      <div className="container">
        <div className="movie__inner">
          {loading && list.length === 0 ? (
            <p className="empty-state">영화 목록을 불러오는 중입니다…</p>
          ) : null}
          {!loading && list.length === 0 ? (
            <p className="empty-state">
              {emptyText || "표시할 영화가 없습니다."}
            </p>
          ) : null}
          <ul>
            {list.map((movie, index) => (
              <MovieItem key={`${movie.id}-${index}`} movie={movie} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MovieCont;
