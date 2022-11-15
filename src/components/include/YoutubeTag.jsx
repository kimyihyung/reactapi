import React from "react";

const youtubeList = [
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "PHP" },
  { name: "REACT" },
  { name: "VUE" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <section className="btn__list">
      <div className="container">
        {youtubeList.map((list, index) => (
          <button onClick={btnClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default YoutubeTag;
