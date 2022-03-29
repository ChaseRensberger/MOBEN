import React from 'react';

import MapIcon from '@mui/icons-material/Map';
import GridViewIcon from '@mui/icons-material/GridView';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/MOBEN',
    icon: <GridViewIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Plan',
    path: '/plan',
    icon: <MapIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <AssessmentIcon/>,
    cName: 'nav-text'
  }
];
