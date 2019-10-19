import React from 'react'
import { withRouter } from 'react-router'

const LocationSearmForm = props => {
  return(<div className='location-search-form container border rounded d-flex flex-column'>
    <div className='d-flex justify-content-between p-4'>

      <span className=''></span>
      <input style={{width: '75%'}} className='border rounded' type='text' placeholder='Search for location'/>
    </div>
  </div>)
};

export default withRouter(LocationSearmForm)