class Goal {
    constructor(data) {
        this.id = data.id
        this.target = data.target
<<<<<<< HEAD
        this.last_click = data.last_click
=======
        this.list_click = data.last_click
>>>>>>> 2b9c900b43d3df4a3e43312886597dfbcb3c382a
        this.level = data.level
        this.units = data.units
        this.created_at = data.created_at
    }
<<<<<<< HEAD

    goalState() {
        let date = new Date()
        let goalDate
        (this.last_click) ? goalDate = this.last_click.toString : goalDate = this.created_at.toString()
        if ((this.formatDate(goalDate)[0] < date.getFullYear()) || (this.formatDate(goalDate)[1] < date.getMonth())) {
            this.status = 'dead'}
        else if ((date.getDate() - this.formatDate(goalDate)[2]) > 1) {
            this.status = 'dead';}
        else if ((date.getDate() - this.formatDate(goalDate)[2]) == 1) {
            this.status = 'late';}
        else this.status = 'alive';
        console.log(this.status)
    }

    formatDate(timeEntry) {
        let data = timeEntry.split("")
        let result = [
        parseInt(data.slice(0,4).join("")),
        parseInt(data.slice(5,7).join("")),
        parseInt(data.slice(8,10).join(""))
        ]
        return result
    }
    
=======
>>>>>>> 2b9c900b43d3df4a3e43312886597dfbcb3c382a
}