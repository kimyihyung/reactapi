import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [movielist, listMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-KR"
    )
      .then((response) => response.json())
      .then((result) => listMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };
  //js 방식

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&query=Marvel"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);
  //리액트 방식

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "referece API"]} />
        <MovieList movielist={movielist} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
