import React from 'react'
import { withRouter } from 'react-router'
import SiteCard from '../components/SiteCard'

const SitesContainer = props => {
  return(<div className='' stlye={{overflow: 'scroll'}}>
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