const baseURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${baseURL}/events/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${baseURL}/events`).then(result => result.json())
      },
      delete(id) {
        return fetch(`http://localhost:5002/events/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      },
      post(newEvent) {
        return fetch(`${baseURL}/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEvent)
        }).then(data =>data.json())
      },
        update(editedEvent) {
        return fetch(`${baseURL}/events/${editedEvent.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedEvent)
        }).then(data => data.json());
      }
    }