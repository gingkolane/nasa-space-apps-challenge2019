import React from 'react'
import { withRouter } from 'react-router'
import SiteCard from '../components/SiteCard'

const SitesContainer = props => {
  return(<div className='m-2'>
  <div>
    <h4>Sites</h4>
  </div>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    <SiteCard/>
    </div>)
};

export default withRouter(SitesContainer)