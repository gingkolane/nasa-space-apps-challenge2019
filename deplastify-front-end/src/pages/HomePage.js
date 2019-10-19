import React, { useState } from 'react'
import Header from '../components/Header'
import MapContainer from '../containers/MapContainer.js'

import LoadingPage from '../pages/LoadingPage'

import { geolocated } from 'react-geolocated'

const HomePage = props => {
  const { coords } = props
  // console.log('location data?', coords)
    return(<>
      { coords ?
        <>
        <Header/>
        <MapContainer coords={coords}/>
        </> : <LoadingPage/>}
    </>)
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);
