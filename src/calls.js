class FetchCalls {
    constructor() {
        this.url = "http://localhost:3000/api/v1"
    }
    //get list of all users
    getUserList(){
        
        return fetch(`${this.url}/users`)
        .then(response => response.json())
    }
    //get specified users login
    logInUser(id){
        
        return fetch(`${this.url}/users/${id}`)
        .then(response => response.json())
    }
    //create new user record
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
    //create new goal record
    createGoal(id){
        
        return fetch(`${this.url}/users/${id}/goals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                target: event.target[0].value,
                level: event.target[1].value,
                goal_slot: event.target[2].value
            })
        })
        .then(response => response.json())
    }
    //update specified goal record
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