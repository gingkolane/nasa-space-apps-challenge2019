import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import googleMapApiKey from '../secrets/GoogleMapKey'

const Map = props => {
  // console.log('map',props)
  return(<GoogleMap
    defaultZoom={15}
    defaultCenter={{lat:40.712776, lng:-74.005974}}/>)
};

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function myMap(){
  return(
    <div style={{width: '100%', height: '80vh'}}>
      <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
      loadingElement={<div style={{height:'100%'}}/>}
      containerElement={<div style={{height:'100%'}}/>}
      mapElement={<div style={{height:'100%'}}/>}
      />
    </div>
  )
}

