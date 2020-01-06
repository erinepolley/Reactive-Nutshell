import React, { Component } from 'react'
import { Link } from "react-router-dom"
import TaskCard from './TaskCard'
import API from '../../modules/TasksManager'


export default class TaskList extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const appUserId = localStorage.getItem("activeUser")
        console.log(appUserId)
        API.getUserTasks(appUserId)
            .then((taskArray) => {
                console.log(taskArray)
                this.setState({
                    tasks: taskArray
                })
            })
    }

    deleteTask = id => {
        const appUserId = localStorage.getItem("activeUser")
        console.log(appUserId)
        API.delete(id)
            .then(() => {
                API.getUserTasks(appUserId)
                    .then((taskArray) => {
                        console.log("TASK ARRAY FROM DELETE METHOD", taskArray)
                        this.setState({
                            tasks: taskArray

                        })
                    })
            })
    }

    // editTaskName = (taskId) = {
        
    // }

    render() {
        console.log(this.state.tasks)
        return (
            <>

                <div className="container-cards">
                    <h2>My To Do List</h2>
                    <Link to={`/tasks/taskform`}><button type="button">Add New Task</button></Link>

                    {this.state.tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task}
                            //is "this.deleteTask in brackets because it's JS? But isn't the above task in curly brackets because it's an object?"
                            deleteTask={this.deleteTask}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}
