import React from 'react'
import { withRouter } from 'react-router'

const SiteCard = props => {
  return(<>
    <div className='card my-3'>
      <img className='card-img-top' src='' alt='site'/>
      <div className='card-body'>
        <h5 className='card-title'>Site Title</h5>

      </div>
    </div>
  </>)
};

export default withRouter(SiteCard)

