import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌
import Header from "../src/components/layout/Header";
import Contents from "../src/components/layout/Contents";
import Footer from "../src/components/layout/Footer";
import Title from "../src/components/layout/Title";
import MovieCont from "../src/components/include/MovieCont";
import MovieList from "../src/components/include/MoviePopular";
import MovieSearch from "../src/components/include/MovieSearch";
import Contact from "../src/components/layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  // 4번 : 콜백함수로 밑에서 처리한거 보낸 뒤 moviesPopular(저장소)로 보냄
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-KR"
    )
      // 1번 : 값을 가져오고

      // 2번 : json으로 변환
      .then((response) => response.json())

      // 3번 : json으로 변환한 값에 results로 보냄
      .then((result) => setLists(result.results))
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
        {/* 5번 저장소에서 가져옴 */}
        <MovieList lists={lists} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
