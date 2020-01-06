const baseUrl = `http://localhost:5002`
export default {
    getAllByUser(userId) {
        return fetch(`${baseUrl}/friends/?loggedInUserId=${userId}&_expand=user`)
        .then(data => data.json())
    },
    getAll() {
        return fetch(`${baseUrl}/users/?_embed=friends`)
        .then(data => data.json())
    },
    post(newFriend) {
        return fetch(`${baseUrl}/friends`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json" 
            },
            body: JSON.stringify(newFriend)
        }).then(friends => friends.json())
    }
}