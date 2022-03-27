import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import Plan from './pages/Plan/Plan';

import Navbar from './components/Navbar';

import theme from './components/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route path='/MOBEN' exact component={Dashboard} />
            <Route path='/plan' component={Plan} />
            <Route path='/analytics' component={Analytics} />   
          </Switch>
        </div> 
      </Router>
    </ThemeProvider>
  );
};

export default App;
