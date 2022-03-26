import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Plan from './pages/Plan';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/plan' component={Plan} />
          <Route path='/analytics' component={Analytics} />   
        </Switch>
      </Router>
    </>
  );
}

export default App;
