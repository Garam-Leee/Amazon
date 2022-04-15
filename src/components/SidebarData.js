import React from 'react'; 
import * as RiIcons from 'react-icons/ri';
import '../App.css';

export const SidebarData = [
  {
    title: 'B2B',
    path: '/reports/reports1',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1', 
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2', 
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3' 
      }
    ]
  },
  {
    title: '구매계획',
    path: '/overview/users', 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview', 
      },
      {
        title: 'Revenue',
        path: '/overview/revenue'
      }
    ]
  },
  {
    title: '납품관리',
    path: '/products'
  },
  {
    title: '품질관리',
    path: '/team'
  }, 
  {
    title: '재고관리',
    path: '/support'
  }
];
