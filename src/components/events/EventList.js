import React, { Component } from 'react'
    //import the components we will need
    import EventCard from './EventCard'
    import EventsManager from '../../modules/EventsManager'
    import "bootstrap/dist/css/bootstrap.min.css"

    class EventList extends Component {
        //define what this component needs to render
        state = {
            events: [],
        }

    componentDidMount(){
        console.log("Event LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EventsManager.getAll()
        .then((eventsArray) => {
            this.setState({
                events: eventsArray
            })
        })
    }
    
    deleteEvent = id => {
      EventsManager.delete(id)
      .then(() => {
        EventsManager.getAll()
        .then((newevents) => {
          this.setState({
              events: newevents
          })
        })
      })
    }

    render() {
        console.log("EventsList: Render");
        console.log(this.state.events)
        
        return(
          <React.Fragment>
            <section className="section-content">
              <button type="button" className="btn text-primary bg-dark"
              onClick={() => {this.props.history.push("/events/new")}}>
              Create Event
          </button>
            </section>
          <div className="container-cards">
            {this.state.events.map((event) =>
              <EventCard 
              key={event.id} 
              event={event} 
              deleteEvent={this.deleteEvent}
              {...this.props}
              />
              )}
          </div>
        </React.Fragment>
        )
      }
    //   This is the old way of doing this from the first or second exercise use this as a reference for the now working code in how it needed to change.
    // render(){
    //     console.log("ANIMAL LIST: Render");

    //     return(
    //         <div className="container-cards">
    //             {this.state.animals.map(animal => <AnimalCard />)}
    //         </div>
    //     )
    // }
    }

export default EventList;