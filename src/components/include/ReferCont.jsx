import React from "react";

const ReferText = ({ id, title, desc }) => {
  return (
    <li>
      <span>{id}</span>
      <span>{title}</span>
      <span>{desc}</span>
    </li>
  );
};

const ReferCont = ({ references }) => {
  //console.log({ references }); // => 데이터 가는지 확인. 중괄호 꼭 사용하기
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                id={refer.id}
                title={refer.title}
                desc={refer.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
