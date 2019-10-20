import React from 'react'
import Header from '../components/Header'
// import MapContainer from '../containers/MapContainer.js'

import LocationSearchForm from '../components/LocationSearchForm'
// import LoadingPage from '../pages/LoadingPage'

import { geolocated } from 'react-geolocated'

const HomePage = props => {
  // const { coords } = props

    return(<>


        <Header/>

        <img src='https://i.imgur.com/BRlMr8U.png' alt='map' className='drifter-map-image'/>

        <LocationSearchForm />

    </>)
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);
