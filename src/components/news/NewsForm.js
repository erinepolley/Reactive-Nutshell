import React, { Component } from 'react'
import "./NewsForms.css"
import NewsManager from '../../modules/NewsManager'

class NewsForm extends Component {
    state = {
        title: "",
        synopsis: "",
        url: "",
        timestamp: ""
    }
    handleFieldChange = (event) => {
        console.log(this.state)
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    createNewsObject = (event) => {
        event.preventDefault()
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            alert("Please fill out all fields before hitting 'submit'")
        } else {

            const news = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                timestamp: new Date(),
                userId: Number(localStorage.getItem("activeUser"))
            }
            NewsManager.post(news)
                .then(() => { this.props.history.push("/news") })
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                <form>
                <h2 className="form-heading">Add a News Article</h2>
                    <fieldset className="form-container">
                        <div className="form">
                            <label
                                htmlFor="title"
                            >Title
                    </label>
                            <input
                                id="title"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                            <label
                                htmlFor="url"
                            >
                                URL
                    </label>
                            <input
                                id="url"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                            <label
                                htmlFor="synopsis"
                            >Synopsis
                    </label>
                            <input
                                id="synopsis"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formButton form">
                            <button
                                className="button"
                                id="news-article-button"
                                onClick={this.createNewsObject}
                            >
                                Save News Article
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }


}

export default NewsForm