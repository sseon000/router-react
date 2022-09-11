import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const { search } = useLocation();
  const detail = search === "?detail=true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
}

export default About;
