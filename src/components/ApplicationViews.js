import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import NewsEditForm from "./news/NewsEditForm"
import SignUp from "./auth/SignUp";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventEditForm from "./events/EventEditForm";
import EventForm from "./events/EventForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import MessageEditForm from "./messages/MessageEditForm"
import TaskList from "./tasks/TaskList"
import TaskForm from "./tasks/TaskForm"
import FriendsList from "./friends/FriendsList"
import TaskEdit from "./tasks/TaskEdit"

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Home {...props} />
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/signup" render={props => {
            return <SignUp setUser={this.props.setUser} {...props} />
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return <FriendsList {...props} />
          }}
        />

        <Route exact path="/messages" render={props => {
          return <MessageList {...props}
          />
        }}
        />

        <Route path="/messages/new" render={props => {
          return <MessageForm {...props} />
        }}
        />

        <Route exact path="/message/:messageId(\d+)/edit" render={props => {
          return <MessageEditForm {...props} />
        }}
        />

        <Route
          exact path="/tasks" render={(props) => {
            return <TaskList {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/tasks/taskform" render={(props) => {
            return <TaskForm {...props} />
          }}
        />

        <Route
          path="/tasks/taskId(\d+)/edit" render={props => {
            return <TaskEdit {...props} />
          }}
        />

        <Route exact
          path="/events" render={props => {
            if (this.props.user) {
            return <EventList {...props} />
            } else {
              return <Redirect to="/signup" />
            }
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route exact path="/events/:eventId(\d+)" render={props => {
          return <EventDetail eventId={parseInt(props.match.params.eventId)}
            {...props}
          />
        }} />

        <Route exact path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }}
        />

        <Route exact path="/news" render={props => {
          return <NewsList {...props}
          />
        }}
        />
        <Route path="/newsform" render={props => {
          return <NewsForm {...props} />
        }}
        />
        <Route path="/news/:newsId(\d+)/edit" render={props => {
          return <NewsEditForm {...props} />
        }}
        />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }}
        />
        <Route path="/users" render={(props) => {
          return <Home {...props} />
        }}
        />
      </React.Fragment>
    );
  }
}
