import React from "react";

const UnsplashTag = ({ tags, activeTag, onSelect }) => {
  const list = Array.isArray(tags) ? tags : [];
  if (list.length === 0) return null;

  return (
    <section className="btn__list">
      <div className="container">
        {list.map((name) => {
          const active = name === activeTag;
          return (
            <button
              type="button"
              key={name}
              className={active ? "is-active" : ""}
              aria-pressed={active}
              onClick={() => onSelect(name)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default UnsplashTag;
