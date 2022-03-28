import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';


const drawerWidth = 180;

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {SidebarData.map((item, index) => (
            <Link to={item.path}>
                <ListItem button key={index}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>    
                    <ListItemText primary={item.title}/>
                </ListItem>
            </Link>
          ))}
        </List>
        
      </Drawer>
      
    </Box>
  );
};

export default Navbar;
