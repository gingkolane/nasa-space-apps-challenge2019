import React from 'react'
import { withRouter } from 'react-router'

const LocationSearmForm = props => {

  const { history } = props

  const handleClick = end => {
    history.push(`/${end}`)
  }

  return(<div className='location-search-form border rounded d-flex flex-column'>

    <div className='d-flex justify-content-between p-2'>
      <img className='logo-sm'src='https://i.imgur.com/1F0AWbU.png' alt='bird with bottle'/>
      <input style={{width: '75%', paddingLeft:'8px'}} className='border rounded' type='text' placeholder='Enter Location'/>
      <button className='btn btn-primary' onClick={() => handleClick('sites')}>Search</button>
    </div>

    <div>

    </div>
  </div>)
};

export default withRouter(LocationSearmForm)