import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

// This grants EventCard the properties of Component from React import. We then Utilize the render method and return our initial card for events to build off of. We also used this to test our preset route path as it was setup before hand by the TA's. 
class EventCard extends Component {
    render() {
        return (
            // Utilizing className as jsx does not support classes to use bootstrap styling on elements in jsx represented as HTML
        <div className="card border border-primary p-3 mb-2 bg-dark text-primary">
            <div className="card-content">
            {/* Each Element has its corresponding Data passed to it through props from parent element. So h1 gets passed event.event because that is how it's defined earlier, naming conventions are a nightmare with this one. NOte for the future */}
            <h1>Event: {this.props.event.event}</h1>
            {/* this.props.event.date passing props into element tags and adding appropriate locations in the object. */}
                <h3>Date: {this.props.event.date}</h3>
                <h3>Location: {this.props.event.location}</h3>
                {/* End of Elements and beginning of adding OnClick event listener to buttons and button creation.  */}
                <button className="text-primary bg-dark" type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
                <button className="text-primary bg-dark" type="button" onClick={() => {this.props.history.push(`/events/${this.props.event.id}/edit`)}}>Edit</button>
                <Link to={`/events/${this.props.event.id}`}><button className="text-primary bg-dark">Detail View</button></Link>
            </div>
        </div>
        );
    }
}

export default EventCard;