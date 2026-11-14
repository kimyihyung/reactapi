import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MoviePopular from "../include/MoviePopular";
import MovieSearch from "../include/MovieSearch";
import Contact from "../layout/Contact";
import curatedMovies from "../../utils/curatedMovies";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_BASE = "https://api.themoviedb.org/3";

const CURATED_NOTE =
  "지금은 미리 준비한 큐레이션 목록으로 표시됩니다. TMDB API 키를 연결하면 실시간 인기작과 검색 결과로 바뀝니다.";
const OFFLINE_NOTE =
  "TMDB에 연결하지 못해 큐레이션 목록에서 대신 찾았습니다. 잠시 후 다시 시도해 주세요.";

// 키 없이도 검색이 동작하도록 큐레이션 목록에서 제목·개봉연도로 찾습니다.
const filterCurated = (query) => {
  const q = (query || "").trim().toLowerCase();
  if (!q) return curatedMovies;
  return curatedMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(q) ||
      String(movie.year).includes(q)
  );
};

const toSafeList = (value) => (Array.isArray(value) ? value : []);

const Movie = () => {
  const hasKey = Boolean(API_KEY && API_KEY.trim());
  const [movies, setMovies] = useState(hasKey ? [] : curatedMovies);
  const [popular, setPopular] = useState(
    hasKey ? [] : curatedMovies.slice(0, 10)
  );
  const [source, setSource] = useState(hasKey ? "live" : "curated");
  const [loading, setLoading] = useState(hasKey);
  const [message, setMessage] = useState(hasKey ? "" : CURATED_NOTE);
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const request = useCallback(
    async (path) => {
      const res = await fetch(`${API_BASE}${path}&api_key=${API_KEY}`);
      if (!res.ok) {
        throw new Error(`TMDB request failed (${res.status})`);
      }
      const data = await res.json();
      return toSafeList(data.results);
    },
    []
  );

  const loadPopular = useCallback(async () => {
    const list = await request(`/movie/popular?language=ko-KR`);
    if (!aliveRef.current) return;
    if (!list.length) throw new Error("TMDB returned an empty list");
    setPopular(list.slice(0, 10));
    setMovies(list);
    setMessage("");
  }, [request]);

  useEffect(() => {
    if (!hasKey) return;
    let cancelled = false;
    setLoading(true);
    loadPopular()
      .catch((error) => {
        console.warn("TMDB unavailable, falling back to curated data:", error);
        if (cancelled || !aliveRef.current) return;
        setSource("curated");
        setPopular(curatedMovies.slice(0, 10));
        setMovies(curatedMovies);
        setMessage(OFFLINE_NOTE);
      })
      .finally(() => {
        if (!cancelled && aliveRef.current) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [hasKey, loadPopular]);

  const search = async (query) => {
    const q = (query || "").trim();

    // 검색어가 비면 기본 목록으로 되돌립니다.
    if (!q) {
      if (source === "live") {
        setLoading(true);
        try {
          await loadPopular();
        } catch (error) {
          console.warn("TMDB unavailable, falling back to curated data:", error);
          setSource("curated");
          setPopular(curatedMovies.slice(0, 10));
          setMovies(curatedMovies);
          setMessage(OFFLINE_NOTE);
        } finally {
          setLoading(false);
        }
      } else {
        setMovies(curatedMovies);
        setMessage(CURATED_NOTE);
      }
      return;
    }

    if (source === "curated") {
      const found = filterCurated(q);
      setMovies(found);
      setMessage(
        found.length
          ? CURATED_NOTE
          : `'${q}'에 해당하는 작품을 큐레이션 목록에서 찾지 못했습니다. 다른 제목으로 검색해 보세요.`
      );
      return;
    }

    setLoading(true);
    try {
      const list = await request(
        `/search/movie?language=ko-KR&query=${encodeURIComponent(
          q
        )}&page=1&include_adult=false`
      );
      setMovies(list);
      setMessage(
        list.length ? "" : `'${q}' 검색 결과가 없습니다. 다른 검색어로 시도해 보세요.`
      );
    } catch (error) {
      console.warn("TMDB search failed, falling back to curated data:", error);
      setSource("curated");
      setPopular(curatedMovies.slice(0, 10));
      setMovies(filterCurated(q));
      setMessage(OFFLINE_NOTE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference API"]} />
        {message && <p className="data-note">{message}</p>}
        <MoviePopular popular={popular} />
        <MovieSearch onSearch={search} />
        <MovieCont
          movies={movies}
          loading={loading}
          emptyText="표시할 영화가 없습니다. 다른 검색어를 입력해 보세요."
        />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
