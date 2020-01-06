//import the components we will need
import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessagesManager from '../../modules/MessagesManager'


class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }

    componentDidMount() {
        const currentUser = localStorage.getItem("activeUser")
        MessagesManager.getAll(currentUser)
            .then(messagesArray => {
                this.setState({
                    messages: messagesArray
                })
            })
    }
    


    deleteMessage = (id) => {
        // const currentUser = localStorage.getItem("activeUser")
        MessagesManager.delete(id)
            .then(() => {
                MessagesManager.getAll()
                .then((newMessages) => {
                    this.setState({
                        messages: newMessages
                    })
                })
            })
    }

    
    render() {
        console.log(this.state)
        return (
            <>

                <div>
                    {this.state.messages.map(messageEntry =>
                        <MessageCard
                        key={messageEntry.id}
                        messageEntry={messageEntry}
                        deleteMessage={this.deleteMessage}
                        {...this.props}
                        />
                    )}
                </div>

                        <section>
                            <button
                                id="add-new-message-button"
                                className="button"
                                onClick={() => { this.props.history.push("/messages/new") }}>
                                Add Message
                            </button>
                        </section>
            </>
        )
    }
}

export default MessageList;