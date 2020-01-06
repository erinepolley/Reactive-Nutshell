const baseUrl = `http://localhost:5002`

export default {
    get(newsId) {
        return fetch(`${baseUrl}/news/${newsId}`)
        .then(data => data.json())
    },
    getAll(userId) {
        return fetch(`${baseUrl}/users/${userId}/news?_sort=timestamp`)
        .then(data => data.json())
    },
    post(newItem) {
        return fetch(`${baseUrl}/news`, {
            method: "POST",
            headers: {"Content-Type": "application/json"
        },
            body: JSON.stringify(newItem)
    }).then(data => data.json())
    },
    update(editedItem) {
        return fetch(`${baseUrl}/news/${editedItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedItem)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${baseUrl}/news/${id}`, {
            method: "DELETE"
        }).then(data => data.json())
    }
}
// http://localhost:5002/users/2/?_embed=news