import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';

export default class TaskForm extends Component {
    state = {
        task: "",
        date: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        //evt. target.id is accessing a key in state. The value of the input field is getting put into the correct corresponding key in state. THEN setState is changing state as soon as anything happens on the DOM. 
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewTask = evt => {
        console.log("IS THIS GETTING HIT?")
        //The line below is bc forms direct away from page when submit button is clicked by default. We don't want that to happen. 
        evt.preventDefault()
        if (this.state.task === "" || this.state.date === "") {
            window.alert("Please input an task name or date");
        } else {
            this.setState({ loadingStatus: true })
            const userIdString = localStorage.getItem("activeUser")
            console.log(userIdString)
            const newTask = {
                task: this.state.task,
                date: this.state.date,
                completed: false,
                userId: parseInt(userIdString, 10)
            };
            console.log(newTask)
            // Create the animal and redirect user to animal list
            TasksManager.post(newTask)
                .then(() => this.props.history.push("/tasks"));
        }
    };

    render() {
        console.log("HI THERE!!!")
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="task">Task</label>
                            <input type="text" required onChange={this.handleFieldChange}
                                id="task" placeholder="ex. Get into fight with Susie" />
                            <br></br>
                            <label htmlFor="date">Date to be Completed</label>
                            <input type="date" required onChange={this.handleFieldChange}
                                id="date" />
                        </div>
                        <button type="button" disabled={this.state.loadingStatus}
                            onClick={this.constructNewTask}>Add Task</button>

                    </fieldset>
                </form>
            </>
        )
    }

}