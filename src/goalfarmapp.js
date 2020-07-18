class GoalFarmApp {
    constructor(){
        this.call = new FetchCalls()
        this.elements()
        this.goals = []
        this.images = images
    }
    
    //selection of document elements for manipulation/event handling
    elements() {
        const App = this
        this.loginPrompt = document.querySelector('.loginPrompt')
        this.loginPrompt.addEventListener('submit', function(event) {
           if(event.target.className =="loginPrompt"){
                App.findUser(event)
            }
        })
        this.regForm = document.querySelector('.regForm')
        this.regForm.addEventListener('submit', function(event) {
            if(event.target.className =="regForm"){
                App.newUser(event)
            }
        })
        this.profile = document.getElementById('profile')
        this.canvas = document.getElementById('canvas')
    }

    //find matching usernames Id number and hide form if successful
    async findUser(event){
        event.preventDefault()
        let username = document.getElementById('username').value
        
        await this.call.getUserList()
        .then(json => {
            json.find(el => {
              if(el.username === username) {
                  this.logIn(el.id)
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
        this.logged_in()
    }   

    //create new user record and store info in API.
    async newUser(event) {
        event.preventDefault()
        await this.call.createUser()
        .then(json => {
            this.user = new User(json)
        })
        this.logged_in()
    }
    //actions to take once user is logged in
    logged_in() {
        this.loginPrompt.hidden=true
        this.regForm.hidden=true
        this.profile.innerHTML=this.generate_profile()
        this.buildGoals()
    }
    //create profile string to display
    generate_profile() {
        let profile_string = ""
        for (let i=0;i<3;i++){
        profile_string += `<p> ${(Object.keys(this.user)[i])}: ${(Object.values(this.user)[i])} </p> `
        }
        return profile_string
    }
    //populate users goal objects
    buildGoals() {
        for (let e of this.user.goals){
            console.log(this.user.goals.length)
            this.goals.push(new Goal(e))
            this.goals[this.goals.length - 1].goalState()
            }
        }

}