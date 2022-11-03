import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimyihyung/reactapi/main/src/utils/reference%20copy.json"
    )
      .then((response) => response.json()) //데이터 어떻게 처리할지 세미콜론 안됨
      //.then((result) => console.log(result.data.htmlRefer)) //result.data.htmlRefer 원하는 값만 불러오기
      .then((result) => setReferences(result.data.htmlRefer)) //setReferences 저장하여 이후 다 연계되며 넘겨짐.
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
