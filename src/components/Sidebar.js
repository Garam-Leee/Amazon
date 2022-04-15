import React, { useState } from 'react';
import styled from 'styled-components';
import './topsection.css';
// import { Link } from 'react-router-dom'; 
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import Sidebarbtn from './Sidebarbtn';
import SubMenu from './SubMenu';
import Buttonlog from './Modals/Login/button';



// Topsection
const Nav = styled.div`
  background: white;
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 20%); 
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;    
  flex-wrap: wrap
`;


const SidebarNav = styled.nav`
  background: white;
  color: #555;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 116px; 
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  color: #555;
`;

const SelectBox = () => {
  return (
    <select className="dropSite">
      <option key="site" value="banana">
        사이트 바로가기
      </option>
      <option key="e-catalog" value="apple">e-catalog</option>
      <option key="contract" value="orange">계약관리</option>
    </select>
  );
};

const Username = () => {
  var name = "이가람 [ 주식회사 ]";
  return (
    <span className="left_name"> {name}</span>
  );
};

const Sidebar = (item, index) => {
  const [sidebar] = useState(true);
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          <div className="topbarWrapper">
            <div className="topLeft">
              <div className="logo"><img className='logo_img' alt='logo' src="https://together.homecc.co.kr/resources/images/common/logo.png" /></div>
              <div className="dropSite">
                <SelectBox />
              </div>
            </div>
            <div className="topRight">
              <div className="topRight_left">
                <Username />
              </div>
              <div className="topRight_center">
                <button className="logoutbtn">로그아웃</button>
              </div>
              <button className="topRight_right" >
                <Buttonlog /> 
              </button>
            </div>
          </div> 
          <Sidebarbtn />
          <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => { return <SubMenu item={item} key={index} />; })}
          </SidebarWrap>
        </SidebarNav>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
