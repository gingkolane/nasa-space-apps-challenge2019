import React from 'react'
import Map from '../components/Map'

const MapContainer = props => {

  const { coords } = props

  return(<>
    <div className='container border rounded my-2 map-container'>
      <Map coords={coords}/>
    </div>
    </>)
};

export default MapContainer