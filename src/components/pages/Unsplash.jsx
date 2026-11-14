import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashTag from "../include/UnsplashTag";
import Contact from "../layout/Contact";
import curatedPhotos, {
  curatedTags,
  searchCuratedPhotos,
} from "../../utils/curatedPhotos";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const API_BASE = "https://api.unsplash.com";

// Unsplash 사이트가 쓰는 주제 목록입니다. (API 모드에서만 사용)
const UNSPLASH_TOPICS = [
  "3D Renders",
  "Experimental",
  "Architecture",
  "Fashion",
  "Nature",
  "People",
  "Athletics",
];

const CURATED_NOTE =
  "지금은 미리 준비한 큐레이션 이미지로 표시됩니다. Unsplash API 키를 연결하면 실시간 이미지로 바뀝니다.";
const OFFLINE_NOTE =
  "Unsplash에 연결하지 못해 큐레이션 이미지에서 대신 찾았습니다. 잠시 후 다시 시도해 주세요.";

const shuffle = (list) => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// 태그와 검색어를 동시에 적용한 큐레이션 목록을 돌려줍니다.
const pickCurated = (tag, query) => {
  const searched = searchCuratedPhotos(query);
  if (!tag || tag === "전체") return searched;
  return searched.filter((photo) => photo.tag === tag);
};

const requestRandom = async (path) => {
  const res = await fetch(
    `${API_BASE}${path}${path.includes("?") ? "&" : "?"}client_id=${ACCESS_KEY}`
  );
  if (!res.ok) throw new Error(`Unsplash request failed (${res.status})`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Unsplash returned a non-list");
  return data;
};

const Unsplash = () => {
  const hasKey = Boolean(ACCESS_KEY && ACCESS_KEY.trim());
  const [source, setSource] = useState(hasKey ? "live" : "curated");
  const [images, setImages] = useState(hasKey ? [] : curatedPhotos);
  const [random, setRandom] = useState(
    hasKey ? [] : shuffle(curatedPhotos).slice(0, 10)
  );
  const [activeTag, setActiveTag] = useState(hasKey ? "" : "전체");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(hasKey);
  const [message, setMessage] = useState(hasKey ? "" : CURATED_NOTE);
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const liveSearch = useCallback(async (query) => {
    const res = await fetch(
      `${API_BASE}/search/photos?client_id=${ACCESS_KEY}&query=${encodeURIComponent(
        query
      )}&per_page=24`
    );
    if (!res.ok) throw new Error(`Unsplash search failed (${res.status})`);
    const data = await res.json();
    return Array.isArray(data && data.results) ? data.results : [];
  }, []);

  const loadLive = useCallback(async () => {
    const main = await requestRandom("/photos/random?query=seoul&count=30");
    const slides = await requestRandom("/photos/random?count=10");
    if (!aliveRef.current) return;
    setImages(main);
    setRandom(slides);
    setMessage("");
  }, []);

  const applyCurated = useCallback((tag, query) => {
    const filtered = pickCurated(tag, query);
    setSource("curated");
    setImages(filtered);
    setMessage(
      filtered.length
        ? CURATED_NOTE
        : "조건에 맞는 이미지가 없습니다. 다른 태그나 검색어로 시도해 보세요."
    );
  }, []);

  useEffect(() => {
    if (!hasKey) return undefined;
    let cancelled = false;
    setLoading(true);
    loadLive()
      .catch((error) => {
        console.warn(
          "Unsplash unavailable, falling back to curated data:",
          error
        );
        if (cancelled || !aliveRef.current) return;
        applyCurated("", "");
        setMessage(OFFLINE_NOTE);
      })
      .finally(() => {
        if (!cancelled && aliveRef.current) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [hasKey, loadLive, applyCurated]);

  const search = async (query, tag) => {
    const q = (query || "").trim();
    const tagToUse = tag === undefined ? activeTag : tag;

    if (source === "curated") {
      applyCurated(tagToUse, q);
      return;
    }

    setLoading(true);
    try {
      if (!q) {
        await loadLive();
      } else {
        const results = await liveSearch(q);
        setImages(results);
        setMessage(
          results.length
            ? ""
            : `'${q}' 검색 결과가 없습니다. 다른 검색어로 시도해 보세요.`
        );
      }
    } catch (error) {
      console.warn("Unsplash request failed, falling back to curated data:", error);
      applyCurated(tagToUse, q);
      setMessage(OFFLINE_NOTE);
    } finally {
      setLoading(false);
    }
  };

  const onTagSelect = (tag) => {
    setActiveTag(tag);
    setQuery("");
    if (source === "curated") {
      applyCurated(tag, "");
      return;
    }
    search(tag, tag);
  };

  const onSearchSubmit = (text) => {
    // 검색어로 찾을 때는 태그 필터를 풀고 전체에서 찾습니다.
    setActiveTag("전체");
    search(text, "전체");
  };

  const tagList = source === "live" ? UNSPLASH_TOPICS : curatedTags;

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference API"]} />
        {message && <p className="data-note">{message}</p>}
        <UnsplashSlider random={random} />
        <UnsplashSearch
          value={query}
          onChange={setQuery}
          onSearch={onSearchSubmit}
        />
        <UnsplashTag
          tags={tagList}
          activeTag={activeTag}
          onSelect={onTagSelect}
        />
        <UnsplashCont
          images={images}
          loading={loading}
          emptyText="표시할 이미지가 없습니다. 다른 태그나 검색어로 시도해 보세요."
        />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
