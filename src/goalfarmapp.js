console.log("in login.js")
class GoalFarmApp {
    constructor(){
        this.call = new FetchCalls()
        this.elements()
    }

    elements() {
        this.loginPrompt = document.querySelector('.loginPrompt').addEventListener("t", console.log("hi")) 
    }

    findUser(event){
        event.preventDefault();
       // let username = document.getElementById('username').value
        //this.matchResult(username)
        
        console.log(event)
        document.getElementById('loginPrompt').hidden=true;
         this.userTag = document.getElementById('userTag')
         this.userTag.innerText = "this.user.username"
        
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
            this.user = new User(json)
            console.log(this)
        })
    }   
}