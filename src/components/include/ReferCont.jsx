import React from "react";

// const ReferText = ({ id, title, desc }) => {
//   return (
//     <li>
//       <span>{id}</span>
//       <span>{title}</span>
//       <span>{desc}</span>
//     </li>
//   );
// };
const ReferText = ({ num, title, desc, star }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
      </a>
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
                num={refer.num}
                title={refer.title}
                desc={refer.desc}
                star={refer.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
