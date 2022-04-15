import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* MainMenu */
const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 50px;
  padding: 20px;
  color: #555;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover { 
    background: #fff; 
    font-weight: bold;
    cursor: pointer;
  }
`;

/* <span> 색상 */
const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #555;
 
`;

/* Dropdown 하위 Sidebar */
const DropdownLink = styled(Link)`
  width: auto;
  height: 35px;
  padding: 9px 0 9px 50px;
  background: white;
  color: #353535;
  font-size: 13px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background: #EE7300;
    cursor: pointer;
  }
 
`;


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false); 
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
          return (
            
            <DropdownLink to={item.path} key={index}  > 
              {item.icon}
              <SidebarLabel >{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
