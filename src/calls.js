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
}