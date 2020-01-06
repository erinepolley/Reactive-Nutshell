const baseURL = "http://localhost:5002"

export default {
    getAllUsers() {
        return fetch(`${baseURL}/users`).then(result => result.json())
    }
}
