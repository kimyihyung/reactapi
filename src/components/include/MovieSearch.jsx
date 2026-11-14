import React, { useState } from "react";

const MovieSearch = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState("");

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
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder || "영화 제목을 검색하세요!"}
            aria-label="영화 검색"
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
  );
};

export default MovieSearch;
