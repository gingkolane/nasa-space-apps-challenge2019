import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';

const Map = props => {

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return(<>
      <div className=''>
        <GoogleMapReact
          bootstrapURLKeys={{}}
          defaultCenter={{lat:60, lng: 30}}
          defaultZoom={11}
          >
          <AnyReactComponent
          lat={60}
          lng={30}
          text={'Marker'}
          />
        </GoogleMapReact>

      </div>
    </>)
};

export default Map