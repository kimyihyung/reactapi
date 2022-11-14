import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutube] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCNlEvsy-8VtD9dAUQihHV-OxP2E9wsOn0&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=palantir&key=AIzaSyCNlEvsy-8VtD9dAUQihHV-OxP2E9wsOn0&maxResults=28&type=video"
    )
      .then((response) => response.json())
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "referece API"]} />
        <YoutubeSlider youtubes={youtubes} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
