import React from "react";

const UnsplashSearch = ({ value, onChange, onSearch, placeholder }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <div className="movie__search">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>검색하기</h2>
          <input
            type="search"
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
            placeholder={
              placeholder || "이미지를 검색하세요! (예: nature, 도시, 바다)"
            }
            aria-label="이미지 검색"
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
  );
};

export default UnsplashSearch;
