import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 변수 : 저장, 추가. 변경 --> 자동 변경

const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimyihyung/reactapi/main/src/utils/reference.json"
    )
      .then((response) => response.json())
      .then((result) => setReferences(result.cssRefer))
      .catch((error) => console.log("error", error));
  }, []);
  //fetch에 받아서 컴퍼넌트에 뿌려주는 것.
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Reference", "Book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
