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
        console.log(event.target[0].value)
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
}