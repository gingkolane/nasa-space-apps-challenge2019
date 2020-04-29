import React from 'react'
import Map from '../components/Map'

const MapContainer = props => {

  const { coords } = props

  return(<>
    <div className='m-2'>
      <Map coords={coords}/>
    </div>
    </>)
};

export default MapContainer