import React from 'react'
import '../css/header.css'
import { withRouter } from 'react-router'


const Header = props => {
  // console.log('header',props)
  const { history } = props

  const handleClick = end => {
    history.push(`/${end}`)
  }

  return(<>
      <div className='header d-flex justify-content-between'>

        <div className='d-flex' onClick={() => handleClick('')}>
          <img className='logo'src='https://i.imgur.com/1F0AWbU.png' alt='bird with bottle'/>
          <span className='logo-text'>DePlastify</span>
        </div>

        <div className='d-flex justify-content-around my-auto mx-2'>
          <span onClick={() => handleClick('pickup')} className='side-link'>Record a Pickup</span>
          <span onClick={() => handleClick('site')} className='side-link'>Add Site</span>
          <span onClick={() => handleClick('event')} className='side-link'>Create Event</span>
          <span className='side-link'>Stories</span>
          <span className='side-link'>About</span>
          <span className='side-link'>Log Out</span>
        </div>


      </div>
      <div className='header-background'>

      </div>
    </>)
};
export default withRouter(Header)