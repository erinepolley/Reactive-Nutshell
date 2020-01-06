import React, { Component } from 'react'
import FriendsManager from "../../modules/FriendsManager"
import FriendCard from "./FriendCard"

class FriendsList extends Component {
    state = {
        friends: [],
        allFriends: [],
        username: "",
        userId: "",
        loggedInUserId: "",
        showInputField: false
    }

    componentDidMount() {
        console.log("component mounted")
        const currentUser = localStorage.getItem("activeUser")
        FriendsManager.getAllByUser(currentUser)
            .then(friendsWithUsers => {
                console.log("raw data", friendsWithUsers)
                this.setState({
                    friends: friendsWithUsers
                })
            })
            .then( () => {
                FriendsManager.getAll()
                            .then(allFriends => {
                                this.setState({
                                    allFriends: allFriends
                                })
                            })
                            console.log(this.state)
                    })
    }

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    showField = () => {
        this.setState({
            showInputField: true,
        })
    }
    addNewFriend = (event) => {
        event.preventDefault()
        const currentUser = localStorage.getItem("activeUser")
        this.state.allFriends.forEach(friend => {
            {if (friend.username === this.state.username) {
                const newFriend = {
                    userId: Number(friend.id),
                    loggedInUserId: Number(currentUser)
                }
                console.log("New friend", newFriend)
                FriendsManager.post(newFriend)
                    .then(friends => {
                        FriendsManager.getAllByUser(currentUser)
                        .then(friends => {
                            this.setState({
                                friends: friends
                            })
                        })
                    })
            }}
    })
}



    render() {
        console.log("friends in state", this.state.friends)
        return (
            <>
                <div>
                    <button
                        onClick={this.showField}
                    >Add New Friend</button>
                    <input
                        id="username"
                        hidden={!this.state.showInputField}
                        onChange={this.handleFieldChange}
                    />
                    <button
                        hidden={!this.state.showInputField}
                        onClick={this.addNewFriend}
                    >Make A New Friend</button>
                </div>
                {this.state.friends.map(friend =>
                    <FriendCard
                        key={friend.id}
                        user={friend}
                        {...this.props}
                    />
                )}}
            </>
        )
    }
}

export default FriendsList