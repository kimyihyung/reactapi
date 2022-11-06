import React from "react";

const ReferText = ({
  num,
  descStar,
  name,
  desc,
  values,
  initial,
  syntax,
  descApple,
  descVer,
  definition,
}) => {
  return (
    <li>
      <span className="num">{num}</span>
      <span className="star__name">
        <span className="descStar">{descStar}</span>
        <span className="name">{name}</span>
      </span>
      <span className="desc">{desc}</span>
      <span className="values__initial">
        <details className="values__d">
          <summary>속성값 보기</summary>
          <span className="values">{values}</span>
        </details>
        <span className="initial">{initial}</span>
      </span>
      <span className="syntax">{syntax}</span>
      <span className="descApple">{descApple}</span>
      <details className="definition__d">
        <summary>설명 보기</summary>
        <span className="definition">{definition}</span>
      </details>
      <span className="ver__link">
        <span className="descVer">{descVer}</span>
        <a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${name}`}>
          ☞
        </a>
      </span>
    </li>
  );
};

const ReferCont = ({ references }) => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS Properties</h2>
          <ul className="refer__list">
            <li>
              <span className="num">번호</span>
              <span className="star__name">
                <span className="descStar">중요도</span>
                <span className="name">속성명</span>
              </span>
              <span className="desc">설명</span>
              <span className="values__initial">
                <span className="values__d">속성값</span>
                <span className="initial">기본값</span>
              </span>
              <span className="syntax">예시</span>
              <span className="descApple">사용처</span>
              <span className="definition__d">설명</span>
              <span className="ver__link">
                <span className="descVer">Ver.</span>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  MDN
                </a>
              </span>
            </li>
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                num={refer.num}
                name={refer.name}
                descStar={refer.descStar}
                desc={refer.desc}
                values={refer.values}
                initial={refer.initial}
                syntax={refer.syntax}
                descApple={refer.descApple}
                descVer={refer.descVer}
                definition={refer.definition}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
