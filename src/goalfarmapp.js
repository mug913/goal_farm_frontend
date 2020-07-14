class GoalFarmApp {
    constructor(){
        this.call = new FetchCalls()
        this.elements()
    }
    
    //selection of document elements for manipulation/event handling
    elements() {
        const App = this
        this.loginPrompt = document.querySelector('.loginPrompt')
        this.loginPrompt.addEventListener('submit', function(event) {
           if(event.target.className =="loginPrompt"){
                console.log(event.target.className)
                App.findUser(event)
            }
        })
        this.regForm = document.querySelector('.regForm')
        this.regForm.addEventListener('submit', function(event) {
            if(event.target.className =="regForm"){
                App.newUser(event)
            }
        })
    }

    //find matching usernames Id number and hide form if successful
    async findUser(event){
        console.log("yes")
        event.preventDefault()
        let username = document.getElementById('username').value
        
        await this.call.getUserList()
        .then(json => {
            json.find(el => {
              if(el.username === username) {
                  this.logIn(el.id)
                  this.loginPrompt.hidden=true
                  this.regForm.hidden=true
              }
            })
        })
    }
    
    //set create user object using found Id number
    async logIn(id){
        await this.call.logInUser(id)
        .then(json => {
            this.user = new User(json)
        })
    }   

    newUser(event) {
        console.log(this)
        event.preventDefault()
        this.call.createUser()
        .then(json => {
            this.user = new User(json)
        })
    }




}