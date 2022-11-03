import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMoives] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&query=marble&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMoives(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "referece API"]} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
