import React, { useEffect, useMemo, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeTag from "../include/YoutubeTag";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";
import staticFeed from "../../utils/youtube_video.json";

// 라이브 목록은 저장소의 정적 스냅샷을 그대로 읽습니다. (영상 데이터는 이 파일 하나로 교체됩니다.)
const FEED_URL =
  "https://raw.githubusercontent.com/kimyihyung/reactapi/main/src/utils/youtube_video.json";

const TAGS = ["전체", "JavaScript", "HTML", "CSS", "PHP", "REACT", "VUE"];

// 태그 버튼이 실제로 걸러내는 키워드입니다.
const TAG_KEYWORDS = {
  JavaScript: ["javascript", "자바스크립트"],
  HTML: ["html"],
  CSS: ["css"],
  PHP: ["php"],
  REACT: ["react", "리액트"],
  VUE: ["vue", "vue.js", "뷰js"],
};

const normalize = (item) => {
  const snippet = (item && item.snippet) || {};
  const rawId = item && item.id;
  const videoId =
    rawId && typeof rawId === "object" ? rawId.videoId : rawId;
  const thumbs = snippet.thumbnails || {};

  return {
    id: typeof videoId === "string" ? videoId : "",
    title: snippet.title || "제목 없음",
    description: snippet.description || "",
    channel: snippet.channelTitle || "",
    thumb:
      (thumbs.medium && thumbs.medium.url) ||
      (thumbs.high && thumbs.high.url) ||
      (thumbs.default && thumbs.default.url) ||
      "",
  };
};

const toNormalizedList = (payload) =>
  Array.isArray(payload && payload.items)
    ? payload.items
        .map(normalize)
        .filter((video) => video.id && !String(video.id).startsWith("http"))
    : [];

const sameQuery = (haystack, needle) => haystack.includes(needle);

const Youtube = () => {
  const [videos, setVideos] = useState(() => toNormalizedList(staticFeed));
  const [random, setRandom] = useState([]);
  const [activeTag, setActiveTag] = useState("전체");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch(FEED_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`feed ${response.status}`);
        return response.json();
      })
      .then((payload) => {
        const list = toNormalizedList(payload);
        if (!cancelled && list.length) setVideos(list);
      })
      .catch((error) =>
        console.warn("원격 목록을 읽지 못해 내장 목록을 사용합니다:", error)
      );
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    // 상단 슬라이더는 같은 목록에서 무작위로 10개를 보여줍니다.
    const shuffled = [...videos];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandom(shuffled.slice(0, 10));
  }, [videos]);

  const filtered = useMemo(() => {
    const keywords = TAG_KEYWORDS[activeTag];
    const q = (query || "").trim().toLowerCase();

    return videos.filter((video) => {
      const haystack = `${video.title} ${video.description} ${video.channel}`.toLowerCase();
      const tagOk =
        !keywords || keywords.some((keyword) => sameQuery(haystack, keyword));
      const queryOk = !q || sameQuery(haystack, q);
      return tagOk && queryOk;
    });
  }, [videos, activeTag, query]);

  // 태그 버튼에 몇 개가 걸리는지 함께 보여 줍니다. (목록 데이터가 바뀌면 자동으로 따라갑니다.)
  const tagCounts = useMemo(() => {
    const counts = {};
    TAGS.forEach((tag) => {
      const keywords = TAG_KEYWORDS[tag];
      counts[tag] = keywords
        ? videos.filter((video) => {
            const haystack = `${video.title} ${video.description} ${video.channel}`.toLowerCase();
            return keywords.some((keyword) => haystack.includes(keyword));
          }).length
        : videos.length;
    });
    return counts;
  }, [videos]);

  const handleQueryChange = (value) => {
    setQuery(value);
    // 검색어를 치면 태그 필터는 풀어서 전체 목록에서 찾습니다.
    if (value.trim()) setActiveTag("전체");
  };

  const handleTagSelect = (tag) => {
    setActiveTag(tag);
    setQuery("");
  };

  const emptyText = query
    ? `'${query}'에 해당하는 영상이 없습니다. 다른 검색어로 시도해 보세요.`
    : activeTag === "전체"
    ? "표시할 영상이 없습니다."
    : `${activeTag} 태그에 해당하는 영상이 없습니다. 전체를 눌러 전체 목록을 볼 수 있습니다.`;

  return (
    <>
      <Header />
      <Contents>
        <Title title={["YouTube", "reference API"]} />
        <p className="data-note">
          저장소에 담긴 고정 목록에서 태그·검색어로 걸러 보여줍니다. (총{" "}
          {videos.length}개 중 {filtered.length}개 표시)
        </p>
        <YoutubeSlider random={random} />
        <YoutubeSearch value={query} onChange={handleQueryChange} />
        <YoutubeTag
          tags={TAGS}
          counts={tagCounts}
          activeTag={activeTag}
          onSelect={handleTagSelect}
        />
        <YoutubeCont youtubes={filtered} emptyText={emptyText} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
