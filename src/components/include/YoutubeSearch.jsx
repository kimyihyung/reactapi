import React from "react";

// 입력하는 즉시 목록이 걸러지고, 오른쪽 버튼은 검색어를 지웁니다.
const YoutubeSearch = ({ value, onChange, placeholder }) => {
  return (
    <div className="movie__search">
      <div className="container">
        <form onSubmit={(event) => event.preventDefault()}>
          <h2>검색하기</h2>
          <input
            type="search"
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder || "영상 제목·채널로 검색하세요!"}
            aria-label="영상 검색"
          />
          {value ? (
            <button
              type="button"
              onClick={() => onChange("")}
              aria-label="검색어 지우기"
              title="검색어 지우기"
            >
              ✕
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default YoutubeSearch;
