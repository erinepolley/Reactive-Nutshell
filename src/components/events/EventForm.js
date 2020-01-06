import React, { Component } from 'react';
import EventsManager from '../../modules/EventsManager';

class EventForm extends Component {
    state = {
        event: "",
        date: "",
        location: "",
        loadingStatus: false,
    };

    eventFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    constructNewEvent = event => {
        event.preventDefault();
        if (this.state.event === "" || this.state.date === "" || this.state.location === "") {
            window.alert("Argh Why Would you INput EmpTIY DatA!!43!!");
        } else {
            this.setState({ loadingStatus: true});
            const anEvent = {
                event: this.state.event,
                date: this.state.date,
                location: this.state.location,
            };

            EventsManager.post(anEvent)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){
        return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type="text"
                    required
                    onChange={this.eventFieldChange}
                    id="event"
                    placeholder="Event"
                    />
                    <label htmlFor="event">Event</label>
                    
                    <input
                    type="date"
                    required
                    onChange={this.eventFieldChange}
                    id="date"
                    placeholder="Date"
                    />
                    <label htmlFor="date">Date</label>
                    
                    <input
                    type="text"
                    required
                    onChange={this.eventFieldChange}
                    id="location"
                    placeholder="Location"
                    />
                    <label htmlFor="location">Location</label>
                </div>
                <div className="alignRight">
                    <button
                    type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.constructNewEvent}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
        )
    }
}

export default EventForm;