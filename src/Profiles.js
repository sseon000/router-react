import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";
import { Routes } from "react-router";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profiles;
