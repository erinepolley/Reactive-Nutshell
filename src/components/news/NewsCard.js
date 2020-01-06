import React, { Component } from 'react'
import "./NewsCard.css"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 200,
    },
    media: {
        height: 500,
    },
    margin: {
        margin: 25,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}))



class NewsCard extends Component {



    render() {
        return (
            <div className="newscard">
                <Card>
                    <ul>
                        <li className="title">{this.props.newsItem.title}</li>
                        <li>{this.props.newsItem.synopsis}</li>
                        <li>{this.props.newsItem.url}</li>
                    </ul>
                    <div className="news-card-buttons">
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            className="button"
                            id={`news-edit-button--${this.props.newsItem.id}`}
                            onClick={() => this.props.history.push(`/news/${this.props.newsItem.id}/edit`)}
                        >Edit</Button>
                        <Button variant="outlined"
                            color="secondary"
                            size="small"
                            className="button"
                            id={`news-delete-button--${this.props.newsItem.id}`}
                            onClick={() => this.props.deleteNewsArticle(this.props.newsItem.id)}
                        >Delete</Button>
                    </div>
                </Card>

            </div>
        )
    }
}


export default NewsCard