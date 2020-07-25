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
        this.profile = document.getElementById('profile')
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
        this.newGoalForm = document.querySelector('.newGoal')        
        this.newGoalForm.addEventListener('submit', function(event) {
            if(event.target.className =="newGoal"){
                App.newGoal(event)
            }
        })
        //this.canvas = document.getElementById('canvas')
        //this.canvas.elements = []
        //this.canvas.addEventListener('click', function(event) {
        //      App.plotClick(event)
        //   })
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
        this.goals = []
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
        if (this.user.goals){this.buildGoals()}
        this.profile.innerHTML=this.generate_profile()
        this.goalMap()
    }
    //create profile string to display
    generate_profile() {
        let profile_string = ""
        for (let i=0;i<3;i++){
        profile_string += `<p> ${(Object.keys(this.user)[i])}: ${(Object.values(this.user)[i])} </p> `
        }
        if (this.goals){profile_string += `<p> Goal Count: ${this.goals.length} </p> `}
        return profile_string
    }
    //populate users goal objects
    buildGoals() {
        for (let e of this.user.goals){
            this.goals.push(new Goal(e))
            this.goals[this.goals.length - 1].goalState()
            }
        }


    goalMap() {
        const App = this
        let existingPlots = document.getElementById("plots")
        existingPlots.innerHTML = ''
        for (let i = 0; i<5; i ++){
            let img = new Image();
            if (this.goals[i]) {
                switch(this.goals[i].status) {
                    case 'dead': img.src = this.images[4]
                    break;
                    case 'late': img.src = this.images[3]
                    break;
                    case 'alive': 
                    if (this.goals[i].level > 1) {img.src = this.images[2]}
                    else img.src = this.images[1]
                    break;
                }
                img.id = this.goals[i].id
                img.class = 'goal'
                        }
            else {img.src = this.images[0]   
            img.id = 'create'
            img.class = 'goal'}
            this.goals[i] ? img.title = `${this.goals[i].target}` : img.title = `Create Goal`
            img.addEventListener('click', function(event) {
                if(event.target.id != 'create'){
                    App.goalClick(event.target.id)
                }
                else 
                    App.showGoalForm()
            })
            document.getElementById("plots").appendChild(img)
        }
      }
    
    showGoalForm() {
        let goalForm = document.querySelector('.newGoal')
        goalForm.style.display = 'block'
    }

    hideGoalForm() {
        let goalForm = document.querySelector('.newGoal')
        goalForm.style.display = 'none'
    }

    async newGoal(event) {
        event.preventDefault()
        await this.call.createGoal(this.user.id)
        .then(() => {
            this.hideGoalForm()
            this.logIn(this.user.id)})
    }

    async goalClick(id) {
        console.log(id)
        let gId = id
        event.preventDefault()
        await this.call.updateGoal(this.user.id, gId)
        .then(() => {
            this.logIn(this.user.id)})
    }

   
}