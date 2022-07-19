import React from "react";
import "./Header.css";
import Logo from "./img/logo.png";

export default function Header() {
  return (
    <div className="header">
      <image className="header_logo" src={Logo} />
      <div className="header_search">
        <input
          className="header_search_input"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요</span>
          <span className="header_optionLineTwo">로그인하기</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">어쩌고</span>
        </div>
      </div>
    </div>
  );
}
