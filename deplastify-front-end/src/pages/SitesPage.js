import React from 'react'
import { withRouter } from 'react-router'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SitesContainer from '../containers/SitesContainer.js'

const SitesPage = props => {
  return(<>

    <Header/>

    <div className='d-flex flex-column'>

      <div className='py-5 sunset-background' style={{width:'75%'}}>
        <SearchBar/>
      </div>

      <div className='d-flex'>

        <div className='container border rounded mx-2' style={{width:'40%'}}>
          <SitesContainer/>
        </div>

        <div className='container border rounded mx-2' style={{width:'60%'}}>
          Map goes here
        </div>
        
      </div>


  </div>
  </>)
};

export default withRouter(SitesPage)