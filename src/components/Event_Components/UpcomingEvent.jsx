import React from 'react'
import Images from '../Images';
import Logo from "../../assets/Logo.png"
import "../../Css/Upcoming.css"
const events = [
    {
        id: 1,
        image: Images.logo,
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
                <div className="event-card">
                    <div className="card-wrapper">
                        <div className="event-date">
                            <span className="date">06</span>
                            <span className="month">OCT</span>
                        </div>
                        <div className="event-details">
                            <h3 className="event-title">Student life</h3>
                            <p className="event-attendees">1,267 attenders</p>
                            <hr className="divider" />
                        </div>
                    </div>

                    <div className="event-footer">
                        <div className="event-logo">
                            <img
                                src={Logo}
                                alt="Harper Adams University"
                            />
                            <p className='uni-name'>Chitkara <br /> University</p>
                        </div>
                        <button className="delete-button">
                            <i className="fa fa-trash"></i> View Details
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default UpcomingEvent