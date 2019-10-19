import React from 'react'
import Map from '../components/Map'

const MapContainer = props => {
  return(<>
    <div className='container border rounded my-2 map-container'>
      <Map/>
    </div>
    </>)
};

export default MapContainer