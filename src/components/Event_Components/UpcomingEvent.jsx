import React from 'react'
const events = [
    {
        id: 1,
        title: "Tech Symposium 2025",
        date: "January 15, 2025",
        description: "Explore the latest advancements in technology and innovation.",
        location: "Chitkara University Auditorium",
    },
    {
        id: 2,
        title: "Cultural Fest",
        date: "February 20, 2025",
        description: "A celebration of art, music, and culture with performances and workshops.",
        location: "Central Ground",
    },
    {
        id: 3,
        title: "Sports Meet",
        date: "March 10, 2025",
        description: "A day full of exciting sports competitions and activities.",
        location: "Sports Complex",
    },
];

const UpcomingEvent = () => {
    return (
        <div className="event-page container">
            <header className="event-banner">
                <h1>Upcoming Events</h1>
                <p>Stay updated with the latest events happening at Chitkara University.</p>
            </header>

            <section className="event-list">
                {/* {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <h2>{event.title}</h2>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p>{event.description}</p>
                    </div>
                ))} */}
                <div class="event-card">
                    <div class="event-header">
                        <h3>Tech Meetup 2025</h3>
                        <span class="event-category">Workshop</span>
                    </div>
                    <div class="event-details">
                        <p><strong>Date:</strong> January 15, 2025</p>
                        <p><strong>Time:</strong> 10:00 AM - 2:00 PM</p>
                        <p><strong>Location:</strong> Hall A, Campus Center</p>
                    </div>
                    <button class="event-button">View Details</button>
                </div>
            </section>
        </div>
    )
}

export default UpcomingEvent