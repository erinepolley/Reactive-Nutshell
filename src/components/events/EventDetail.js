// Pulling Component and Link from react Native. ALso importing AnimalManager or my API handler in for use later
import React, { Component } from 'react';
import EventsManager from '../../modules/EventsManager';


// Declaring a class/object with the ability to use Component Methods from React
class EventDetail extends Component {
// Setting State which is the state of the app in its current use. So this is setting state for EventDetail the class I declared earlier so when I need to set Props for the Event Card I can do that here.
  state = {
     event: "",
      date: "",
      location: "",
      loadingStatus: true
  }

  // This is a method that runs to load data from a remote endpoin in the json. in this case Event/id then I set the state to have Event/name Event/breed from json server as well. This also allows for another render to occur and makes for a double invocation fo Render which can lead to errors later on but is used for the exercise instead of constructor()
  componentDidMount(){
    console.log("EventDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    // This gathers that id from my API manager in the modules section.
    EventsManager.get(this.props.eventId)
    .then((event) => {
      this.setState({
        event: event.event,
        date: event.date,
        location: event.location,
        loadingStatus: false
      });
    });
  }
  
  // This resets state to invoke the delete method written from eventManager and invokes loadingstatus to allow for a pause for data to collate and impede users from hitting delete before it is fully loades as an object on the dom
  handleDelete = () => {
    //invoke the delete function in eventManger and re-direct to the event list.
    this.setState({loadingStatus: true})
    EventsManager.delete(this.props.eventId)
    .then(() => this.props.history.push("/events"))
}

  handleEdit = () => {
    this.setState({loadingStatus: true})
    EventsManager.update(this.props.eventId)
    .then(() => this.props.history.push("/events"))
  }
  // This is what is invoked after this AnimalDetail is ran and is the path for the Route to follow and render to the DOM it is being fed the props state from the previous function.
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          </picture>
            <h1>Event: {this.state.event}</h1>
            <h3>Date: {this.state.date}</h3>
            <h3>Location: {this.state.location}</h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
// Generic export allowing this module to be imported with any statement identifier
export default EventDetail;