// Purpose: to host all API fetch calls

const baseURL = "http://localhost:5002"

export default {
    /************************************************
     Fetch a single message from database.json 
     ************************************************/
    get(messageId) {
        return fetch(`${baseURL}/messages/${messageId}`)
            .then(result => result.json())
    },

    /************************************************
    Fetch all messages currently in database.json
    *************************************************/
    getAll() {
        console.log("getAll successful")
        return fetch(`${baseURL}/messages?_expand=user`)
            .then(result => result.json())
    },

    /************************************************
     POST a new message entry to the database.json
     ************************************************/
    post(newMessage) {
        return fetch(`${baseURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(result => result.json())
    },

    /**********************************************************
     Fetch a single message entry, edit it, and UPDATE the post
     **********************************************************/
    update(editedMessage) {
        return fetch(`${baseURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        })
            .then(result => result.json())
    },

    /***********************************************
     Fetch a single message and DELETE it
     ***********************************************/
    delete(id) {
        return fetch(`${baseURL}/messages/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    }
}