import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import './css/main.css';
import HomePage from './pages/HomePage'
import SitePage from './pages/SitePage'

function App() {
  return (<>
    <Switch>
      <Route path='/' component={HomePage}/>
    </Switch>
  </>);
}

export default withRouter(App);
