import React from 'react'
import { withRouter } from 'react-router'

const EventCard = props => {
  return(<>
    <div className='card m-3'>

      <div className='card-body'>
        <h5 className='card-title'>Let's Clean Up Ocean Beach Park!</h5>
        <p className='card-text'>I will be picking up trash at Ocean Beach Park starting at 10am on May 5th, please come and join!</p>
      </div>

      <div className='card-body'>
        <a href='#' className='card-link'>Click to view event</a>
      </div>
  </div></>)
};

export default withRouter(EventCard)