import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Main from "./components/pages/Main";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Unsplash from "./components/pages/Unsplash";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import ErrorBoundary from "./components/common/ErrorBoundary";

// 경로가 바뀌면 에러 경계를 초기화해, 한 페이지의 오류가 다른 페이지 이동을 막지 않게 합니다.
const AppRoutes = () => {
  const location = useLocation();

  return (
    <ErrorBoundary resetKey={location.pathname}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/unsplash" element={<Unsplash />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </ErrorBoundary>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
