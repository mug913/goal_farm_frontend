class User {
    constructor(data) {
        this.username = data.username
        this.email = data.email
        this.tz = data.tz
        this.goals = data.goals
    }

    display(){
        console.log(`display=${this}`)
    }
}