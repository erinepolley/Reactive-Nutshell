import React, { Component } from 'react'
import NewsManager from '../../modules/NewsManager'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

class NewsEditForm extends Component {
    state = {
        title: "",
        synopsis: "",
        url: "",
        timestamp: ""
    }
    componentDidMount() {
        NewsManager.get(this.props.match.params.newsId)
            .then(data => {
                console.log(data)
                this.setState({
                    title: data.title,
                    synopsis: data.synopsis,
                    url: data.url,
                    timestamp: data.timestamp

                })
            })
    }
    handleFieldChange = event => {
        const toChangeState = {}
        toChangeState[event.target.id] = event.target.value
        this.setState(toChangeState)
    }
    updateNewsItem = event => {
        event.preventDefault()
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            alert("Please fill out all field before hitting 'submit'")
        } else {
            const news = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                timestamp: this.state.timestamp,
                id: Number(this.props.match.params.newsId),
                userId: Number(localStorage.getItem("activeUser"))
            }
            NewsManager.update(news)
                .then(() => this.props.history.push("/news"))
        }
    }
    render() {
        return (
            <>
                <form noValidate autoComplete="off">
                    <h2 className="form-heading">Edit News Article</h2>
                    <fieldset>
                        <div className="form">
                            <label htmlFor="title">Title
                    </label>
                            <input
                                id="title"
                                type="text"
                                defaultValue={this.state.title}
                                onChange={this.handleFieldChange}
                            />
                            <label htmlFor="url">URL
                    </label>
                            <input
                                type="text"
                                defaultValue={this.state.url}
                                id="url"
                                onChange={this.handleFieldChange}
                            />
                            <label htmlFor="synopsis">Synopsis
                    </label>
                            <input
                                type="text"
                                id="synopsis"
                                defaultValue={this.state.synopsis}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formButton form">
                            <button
                                className="button"
                                onClick={this.updateNewsItem}
                            >
                                Save Changes
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}



export default NewsEditForm