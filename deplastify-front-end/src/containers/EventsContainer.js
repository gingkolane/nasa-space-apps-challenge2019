import React from 'react'
import { withRouter } from 'react-router'
import EventCard from '../components/EventCard'

const EventsContainer = props => {
  return(<div className='d-flex flex-column m-2'>
  <div>
    <h4>Events</h4>
  </div>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>)
};

export default withRouter(EventsContainer)