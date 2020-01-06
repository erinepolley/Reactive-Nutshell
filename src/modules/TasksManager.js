const baseUrl = "http://localhost:5002/"

export default {
    getUserTasks(userId) {
        return fetch(`${baseUrl}tasks?userId=${userId}`)
            .then(data => data.json())
    },

    getSingleTask(taskId) {
        return fetch(`${baseUrl}tasks/${taskId}`)
    },

    post(task) {
        return fetch(`${baseUrl}tasks`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(data => data.json())
    },

    delete(id) {
        return fetch(`${baseUrl}tasks/${id}`, 
        {
            method: "DELETE",
        })
        .then(result => result.json())
    },

    update(editedTask) {
        return fetch(`${baseUrl}tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(data => data.json())
    }
}