import React from 'react';
import im from "../assets/Snapinsta.app_461721482_878286144248272_5998385618333102402_n_1080.jpg"

function Hero() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={im} className="d-block mx-lg-auto img-fluid" alt="Campus Events" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Manage and Explore Campus Events Effortlessly</h1>
                    <p className="lead">Discover, organize, and participate in campus events seamlessly with our platform. Stay updated on upcoming events, connect with clubs, and unleash your potential with Chitkara University's event management system.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore Events</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Join a Club</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
