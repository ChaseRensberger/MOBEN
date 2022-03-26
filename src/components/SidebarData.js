import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Plan',
    path: '/plan',
    icon: <FaIcons.FaRegMap />,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <IoIcons.IoIosAnalytics />,
    cName: 'nav-text'
  }
];
