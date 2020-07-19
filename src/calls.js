class FetchCalls {
    constructor() {
        this.url = "http://localhost:3000/api/v1"
    }

    getUserList(){
        
        return fetch(`${this.url}/users`)
        .then(response => response.json())
    }

    logInUser(id){
        
        return fetch(`${this.url}/users/${id}`)
        .then(response => response.json())
    }

    createUser(){
        
        return fetch(`${this.url}/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: event.target[0].value,
                email: event.target[1].value,
                tz: event.target[2].value
            })
        })
        .then(response => response.json())
    }

    createGoal(id){
        
        return fetch(`${this.url}/users/${id}/goals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                target: event.target[0].value,
                level: event.target[1].value,
            })
        })
        .then(response => response.json())
    }

    updateGoal(user_id, id){
        let date = new Date()
        //let jDate = JSON.stringify(date)
        return fetch(`${this.url}/users/${user_id}/goals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                last_click: date
                })
        })
        .then(response => response.json())
    }
}