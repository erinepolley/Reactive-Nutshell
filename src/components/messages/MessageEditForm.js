// import React, { Component } from "react"
// import MessagesManager from "../../modules/MessagesManger"

// class MessageEditForm extends Component {
//     state = {
//         message: "",
//         timeStamp: "",
//         loadingStatus: true
//     }

//     messageFieldChange = event => {
//         const stateToChange = {}
//         stateToChange[message.target.id] = message.target.value
//         this.setState(stateToChange)
//     }

//     updateExistingMessage = event => {
//         event.preventDefault();
//         this.setState({ loadingStatus: true });
//         const editedMessage = {
//             id: this.props.match.params.eventId,
//             message: this.state.message,
//             timeStamp: this.state.timeStamp,
//         };

//         MessagesManager.update(editedMessage)
//         .then(() => this.props.history.push("/messages"))
//     }

//     componentDidMount() {
//         MessagesManager.get(this.props.match.params.messageId)
//         .then(result => {
//             this.setState({
//                 message: result.message,
//                 timeStamp: result.timeStamp,
//                 loadingStatus: false,
//             });
//         });

//         MessagesManager.getAll()
//             .then(result => this.setState({events: events}))
//     }

//     render() {
//         return(
//         <>
//         <form>
//             <fieldset>
//                 <div className="formgrid">
//                 <input
//                     type="text"
//                     required
//                     className="form-control"
//                         onChange={this.eventFieldChange}
//                         id="event"
//                         value={this.state.event}
//                     />
//                     <label htmlFor="event">Event</label>

//                     <input
//                         type="text"
//                         required
//                         className="form-control"
//                         onChange={this.eventFieldChange}
//                         id="date"
//                         value={this.state.date}
//                     />
//                     <label htmlFor="date">Date</label>
//                     </div>
//                     <div className="alignRight">
//                     <button
//                         type="button" disabled={this.state.loadingStatus}
//                         onClick={this.updateExistingEvent}
//                         className="btn btn-primary"
//                     >Submit</button>
//                 </div>
//           </fieldset>
//         </form>
//         </>
//         );
//     }
// }

// export default EventEditForm
    