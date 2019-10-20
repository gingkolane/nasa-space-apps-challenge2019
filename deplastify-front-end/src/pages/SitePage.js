import React from 'react'
import Header from '../components/Header'
import EventsContainer from '../containers/EventsContainer'
import DataContainer from '../containers/DataContainer'


const SitePage = props => {
  return(<>
    <Header/>
    <div className='d-flex flex-column'>

      <div className='site-image-container d-flex justify-content-center'>
        <img className='site-image' src='https://i.imgur.com/uS14AjK.jpg' alt='site'/>
      </div>

      <div className='d-flex m-2'>

        <div className='container border rounded mx-2 sites-container-wrapper' style={{width:'50%', height: '85vh'}}>

        <div className='m-2'>
          <h4>Information</h4>
        </div>

        <DataContainer />

        </div>

        <div className='container border rounded mx-2 sites-container-wrapper' style={{width:'50%', height: '85vh'}}>
          <EventsContainer/>
        </div>

      </div>

    </div>
    </>)
};

export default SitePage