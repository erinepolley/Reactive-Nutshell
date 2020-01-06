import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class TaskCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">

                        <input type="checkbox" name="checkbox"></input>
                            <label htmlFor="checkbox">Done!</label>

                       <Link to={`/tasks/${this.props.task.id}/edit`}> 
                       <h3>Task:
                           {/* <span onClick={this.props.editTaskName(this.props.task.id)} hidden={this.state.showInputField}> */}
                               {this.props.task.task}
                               {/* </span> */}
                               </h3>
                        </Link>
                        
                        {/* <input id="task" hidden={! this.props.task.showInputField} onChange={this.handleFieldChange}></input> */}
                        <p>Expected Date of Completion: {this.props.task.date}</p>

                        <button type="button" onClick={() =>
                            this.props.deleteTask(this.props.task.id)}>Delete</button>
                    </div>
                </div>
            </>
        )
    }

}