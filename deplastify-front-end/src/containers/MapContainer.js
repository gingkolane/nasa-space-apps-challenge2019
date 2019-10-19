import React from 'react'
import Map from '../components/Map'

const MapContainer = props => {

  const { coords } = props

  return(<>
    <div className=''>
      <Map coords={coords}/>
    </div>
    </>)
};

export default MapContainer