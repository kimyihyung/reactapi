import React from "react";

const ReferText = ({ id, name, desc, descStar }) => {
  return (
    <li>
      <a
        href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${encodeURIComponent(
          name
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className="id">{id}</span>
        <span className="name">{name}</span>
        <span className="desc">{desc}</span>
        <span className="descStar">{descStar}</span>
      </a>
    </li>
  );
};

const ReferCont = ({ references }) => {
  const list = Array.isArray(references) ? references : [];

  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {list.map((refer, idx) => (
              <ReferText
                key={`${refer.num}-${idx}`}
                id={refer.num}
                name={refer.name?.replace(/^\s+|\s+$/g, "")}
                desc={refer.desc}
                descStar={refer.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
