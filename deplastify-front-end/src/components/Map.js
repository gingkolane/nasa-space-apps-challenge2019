import React, { useState } from 'react'
import { GoogleMap, withScriptJs, withGoogleMap } from 'react-google-maps';
import googleMapApiKey from '../secrets/GoogleMapKey'

const Map = props => {

  return(<>
        <GoogleMap
          bootstrapURLKeys={{key: googleMapApiKey}}
          defaultCenter={{lat:60, lng: 30}}
          defaultZoom={11}
          />
    </>)
};

export default withScriptJs(withGoogleMap(Map))