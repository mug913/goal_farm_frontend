console.log("in login.js")
class GoalFarmApp {
    constructor(){
        this.call = new FetchCalls()
        this.elements()
        this.user
    }

    elements() {
        const App = this
        this.loginPrompt = document.querySelector('.loginPrompt')
        this.loginPrompt.addEventListener('submit', function(event) {
            App.findUser(event)
        })
    }

    findUser(e){
        e.preventDefault()
        console.log(e)
        let username = document.getElementById('username').value
        this.matchResult(username)
        document.getElementById('loginPrompt').hidden=true;
        console.log(this.user)
    }

    matchResult(username) {
        let result
        this.call.getUserList()
        .then(json => {
            json.forEach(e => {
                if (e.username == username){
                   result = this.logIn(e.id)
                }
            })
        })
    }

    logIn(id){
        this.call.logInUser(id)
        .then(json => {
            let user = new User(json)
            this.user = user
        })
    }   
}