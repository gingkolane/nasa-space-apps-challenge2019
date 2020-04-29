import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import './css/main.css';
import HomePage from './pages/HomePage'
import SitePage from './pages/SitePage'
import SitesPage from './pages/SitesPage'
import PickupPage from './pages/PickupPage'

function App() {
  return (<>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/pickup' component={PickupPage}/>
      <Route exact path='/sites' component={SitesPage}/>
      <Route exact path='/site' component={SitePage}/>
    </Switch>
  </>);
}

export default withRouter(App);
