import React, { Component } from "react";
import EventsManager from "../../modules/EventsManager";


class EventEditForm extends Component {
    state = {
        event: "",
        date: "",
        location: "",
        loadingStatus: true,
    };

    eventFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = event => {
        event.preventDefault();
        this.setState({ loadingStatus: true });
        const editedEvent = {
            id: this.props.match.params.eventId,
            event: this.state.event,
            date: this.state.date,
            location: this.state.location
        };

        EventsManager.update(editedEvent)
        .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
        EventsManager.get(this.props.match.params.eventId)
        .then(event => {
            this.setState({
                event: event.event,
                date: event.date,
                location: event.location,
                loadingStatus: false,
            });
        });

        EventsManager.getAll()
            .then(events => this.setState({events: events}))
    }

    render() {
        return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                <input
                    type="text"
                    required
                    className="form-control"
                        onChange={this.eventFieldChange}
                        id="event"
                        value={this.state.event}
                    />
                    <label htmlFor="event">Event Title</label>

                    <input
                        type="date"
                        required
                        className="form-control"
                        onChange={this.eventFieldChange}
                        id="date"
                        value={this.state.date}
                    />
                    <label htmlFor="date">Event Date</label>
                    </div>
                    <div className="alignRight">
                    <button
                        type="button" disabled={this.state.loadingStatus}
                        onClick={this.updateExistingEvent}
                        className="btn btn-primary"
                    >Submit</button>
                </div>
          </fieldset>
        </form>
        </>
        );
    }
}

export default EventEditForm