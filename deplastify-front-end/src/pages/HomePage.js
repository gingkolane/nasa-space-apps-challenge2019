import React, { useState } from 'react'
import Header from '../components/Header'
import MapContainer from '../containers/MapContainer.js'

import LocationSearchForm from '../components/LocationSearchForm'
import LoadingPage from '../pages/LoadingPage'

import { geolocated } from 'react-geolocated'

const HomePage = props => {
  // const { coords } = props

    return(<>


        <Header/>
        <div className='drifter-map'>
          <LocationSearchForm />
        </div>

    </>)
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);
