import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Plan',
    path: '/reports',
    icon: <FaIcons.FaRegMap />,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/products',
    icon: <IoIcons.IoIosAnalytics />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/products',
    icon: <IoIcons.IoIosSettings />,
    cName: 'nav-text'
  },
];
