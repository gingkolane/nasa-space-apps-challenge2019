import React from 'react'
import { withRouter } from 'react-router'

const SiteCard = props => {

  const { history } = props

  const handleClick = end => {
    history.push(`/${end}`)
  }

  return(<>
    <div className='card my-3'>
      <img className='card-img-top card-top' src='https://i.imgur.com/uS14AjK.jpg' alt='site'/>
      <div className='card-body'>
        <h5 className='card-title'>Ocean Beach Park</h5>
        <p className='card-text'>Queens NY, NY</p>
        <button className='btn btn-primary'
        onClick={() => handleClick('site')}>View Site</button>
      </div>
    </div>
  </>)
};

export default withRouter(SiteCard)

