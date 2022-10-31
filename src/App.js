import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Unsplash from "./components/pages/Unsplash";
import About from "./components/pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="About" element={<About />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Unsplash" element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
