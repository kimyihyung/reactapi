import React from "react";

const unsplashList = [
  { name: "3D Renders" },
  { name: "Experimental" },
  { name: "Architecture" },
  { name: "Fashion" },
  { name: "Nature" },
  { name: "People" },
  { name: "Athletics" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <section className="btn__list">
      <div className="container">
        {unsplashList.map((list, index) => (
          <button onClick={btnClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default UnsplashTag;
