import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import Plan from './pages/Plan/Plan';

import Navbar from './components/Navbar';

import theme from './theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/plan' component={Plan} />
          <Route path='/analytics' component={Analytics} />   
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
