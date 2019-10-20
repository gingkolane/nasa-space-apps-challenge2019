import React from 'react'
import { withRouter } from 'react-router'

const EventCard = props => {
  return(<>
    <div className='card m-3'>
      
      <div className='card-body'>
        <h5 className='card-title'>Event Title</h5>
        <p className='card-text'>Event Text</p>
      </div>

      <div className='card-body'>
        <a href='#' className='card-link'>Event Link</a>
      </div>
  </div></>)
};

export default withRouter(EventCard)