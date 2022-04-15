import React from 'react'  
import { CgMenuBoxed } from "react-icons/cg";
import { CgUserList } from "react-icons/cg";
import { RiMenuFoldLine } from "react-icons/ri";  

export default function Sidebar_btn() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <div className='sidebar_ListMenu'>
                        <button className="menu_btn1">
                            <CgMenuBoxed size="29"/>
                            메뉴
                        </button>
                        <button className='menu_btn'>
                            <CgUserList size="29"/>
                            즐겨찾기
                        </button>
                        <button className='menu_btn'>
                            <RiMenuFoldLine size="29"/>
                            최근메뉴
                        </button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}