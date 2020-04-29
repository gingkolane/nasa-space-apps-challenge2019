import React from 'react'
import { withRouter } from 'react-router'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SitesContainer from '../containers/SitesContainer.js'
import MapContainer from '../containers/MapContainer.js'

const SitesPage = props => {
  return(<>

    <Header/>

    <div className='d-flex flex-column'>

      <div className='sunset-background'>
        {/*<img className='sunset-img' src='https://i.imgur.com/wqkvd7B.jpg' alt='sunset'/>*/}
        <SearchBar/>
      </div>


      <div className='d-flex m-2'>

        <div className='container border rounded mx-2 sites-container-wrapper' style={{width:'40%', height: '85vh'}}>
          <SitesContainer/>
        </div>

        <div className='container border rounded mx-2' style={{width:'60%', height: '85vh'}}>
          <MapContainer/>
        </div>

      </div>


  </div>
  </>)
};

export default withRouter(SitesPage)