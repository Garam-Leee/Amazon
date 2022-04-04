import React from 'react'
import './sidebar.css'
import { Navigation } from 'react-minimal-side-navigation';
import { CgMenuBoxed } from "react-icons/cg";
import { CgUserList } from "react-icons/cg";
import { RiMenuFoldLine } from "react-icons/ri";  

export default function Sidebars() {
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
                    <Navigation 
                        activeItemId="/management/projects"
                        onSelect={({ itemId }) => { 
                        }}
                        items={[
                            {
                                title: 'MainMenu',
                                itemId: '/management', 
                                subNav: [
                                    {
                                        title: '- submenu1',
                                        itemId: '/management/projects'
                                    },
                                    {
                                        title: '- submenu2',
                                        itemId: 'memberout'
                                    },
                                ],
                            },
                            {
                                title: '구매계획',
                                itemId: '/management',
                                subNav: [
                                    {
                                        title: '- 구매계획 조회',
                                        itemId: '/management',  
                                    }, 
                                ],
                            },
                            {
                                title: '납품관리',
                                itemId: '/another',
                                subNav: [
                                    {
                                        title: '- 견적관리',
                                        itemId: '/management/teams',
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}