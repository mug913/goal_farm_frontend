console.log("in login.js")
class GoalFarmApp {
    constructor(){
        this.call = new FetchCalls()
        this.elements()
    }

    elements() {
        const App = this
        this.loginPrompt = document.querySelector('.loginPrompt')
        this.loginPrompt.addEventListener('submit', function(event) {
            App.findUser(event)
        })
    }

    async findUser(event){
        event.preventDefault()
        let username = document.getElementById('username').value
        document.getElementById('loginPrompt').hidden=true;
        await this.call.getUserList()
        .then(json => {
            json.forEach(e => {
                if (e.username == username){
                  this.logIn(e.id)
                }
            })
        })
    }

   async logIn(id){
        await this.call.logInUser(id)
        .then(json => {
            this.user = new User(json)
        })
        this.userTag = document.getElementById('userTag')
        this.userTag.innerText = this.user.username
    }   

}