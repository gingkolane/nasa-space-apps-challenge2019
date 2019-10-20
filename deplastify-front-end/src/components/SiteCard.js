import React from 'react'
import { withRouter } from 'react-router'

const SiteCard = props => {
  return(<>
    <div className='card my-3'>
      <img className='card-img-top' src='https://i.imgur.com/uS14AjK.jpg' alt='site'/>
      <div className='card-body'>
        <h5 className='card-title'>Site Title</h5>
        <p className='card-text'>Location?</p>
        <button className='btn btn-primary'>View Site</button>
      </div>
    </div>
  </>)
};

export default withRouter(SiteCard)

