import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Samsung</Link>
        </h1>
        <div>
          <ul>
            <li>스마트폰</li>
            <li>태블릿</li>
            <li>갤럭시북</li>
            <li>워치</li>
            <li>버즈</li>
            <li>고객지원</li>
          </ul>
          <div>
            <em></em>
            <ul>
              <li>로그인</li>
              <li>장바구니</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
