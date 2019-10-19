import React from 'react'
import { withRouter } from 'react-router'
import Header from '../components/Header'

const PickupPage = props => {
  console.log('pickup page props', props)
  return(<>
    <Header/>
    </>)
}

export default withRouter(PickupPage)