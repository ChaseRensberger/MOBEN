import React from 'react';

import Transactions from './components/Transactions';
import Box from '@mui/material/Box';


const Dashboard = () => {
  return (
    <Box className='dashboard' sx={{backgroundColor: 'secondary.main'}}>
      <Transactions/>
    </Box>
  );
}



export default Dashboard;
