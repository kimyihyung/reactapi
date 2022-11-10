import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MoviePopular from "../include/MovieList";
import MovieSearch from "../include/MovieSearch";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMoives] = useState([]);
  // 4번 : 콜백함수로 밑에서 처리한거 보낸 뒤 moviesPopular(저장소)로 보냄
  const [listMovies, setListMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-kr&query=${query}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      // .then(result => console.log(result.results))
      .then((result) => setMoives(result.results))
      .catch((error) => console.log("error", error));
  };
  //js 방식

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-kr&query=마블&page=1&include_adult=false"
    )
      .then((response) => response.json())
      // .then(result => console.log(result.results))
      .then((result) => setMoives(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-KR"
    )
      .then((response) => response.json())
      // .then(result => console.log(result.results))
      .then((result) => setListMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  //리액트 방식

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "referece API"]} />
        {/* 5번 저장소에서 가져옴 */}
        <MoviePopular popularMovies={listMovies} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
