import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UpcomingEvent from '../components/Event_Components/UpcomingEvent';
import OngoingEvents from '../components/Event_Components/OngoingEvents';
import PassedEvents from '../components/Event_Components/PassedEvents';


function EventPage() {
  return (
    <div className="event-page">
      {/* Navigation Buttons */}
      <div className="container p-1">
        <NavLink
          to="/event/upcoming"
          className={({ isActive }) => (isActive ? "event-btn mx-5 active" : "event-btn mx-5")}
        >
          Upcoming Events
        </NavLink>
        <NavLink
          to="/event/ongoing"
          className={({ isActive }) => {
            return isActive ? "event-btn mx-5 active" : "event-btn mx-5";
          }}
        >
          Ongoing Events
        </NavLink>
        <NavLink
          to="/event/passed"
          className={({ isActive }) => (isActive ? "event-btn mx-5 active" : "event-btn mx-5")}
        >
          Passed Events
        </NavLink>
      </div>

      {/* Child Routes */}
      <Routes>
        <Route path="upcoming" element={ <UpcomingEvent/>} />
        <Route path="ongoing" element={<OngoingEvents />} />
        <Route path="passed" element={<PassedEvents />} />
        <Route path="*" element={<div>Please select an event category.</div>} />
      </Routes>
    </div>
  );
}

export default EventPage;
