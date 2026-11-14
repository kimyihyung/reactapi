import React from "react";

const YoutubeTag = ({ tags, counts, activeTag, onSelect }) => {
  const list = Array.isArray(tags) ? tags : [];
  if (list.length === 0) return null;

  return (
    <section className="btn__list">
      <div className="container">
        {list.map((name) => {
          const active = name === activeTag;
          const count = counts ? counts[name] : undefined;
          return (
            <button
              type="button"
              key={name}
              className={active ? "is-active" : ""}
              aria-pressed={active}
              onClick={() => onSelect(name)}
            >
              {name}
              {typeof count === "number" ? (
                <span className="tag-count">{count}</span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default YoutubeTag;
