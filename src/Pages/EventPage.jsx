import React from 'react';
import UpcomingEvent from '../components/Event_Components/UpcomingEvent';



function EventPage() {
  return (
    <>
    <div className='container p-1'>
      <button className="event-btn active mx-5">Upcoming Events</button>
      <button className="event-btn mx-5">Ongoing Events</button>
      <button className="event-btn mx-5">Passed Events</button>
    </div>
  
      <UpcomingEvent/>
    </>
      
  );
}

export default EventPage;
