class FetchCalls {
    constructor() {
        this.url = "http://localhost:3000/api/v1"
    }

    getUserList(){
        return fetch(`${this.url}/users`)
        .then(response => response.json())
        .then(function(json){
            console.log(json)
        })

    }
}