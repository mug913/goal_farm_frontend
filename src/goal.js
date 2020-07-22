class Goal {
    constructor(data) {
        this.id = data.id
        this.target = data.target
        this.last_click = data.last_click
        this.level = data.level
        this.units = data.units
        this.created_at = data.created_at
    }
    //set goal state dependent on current time / last time clicked
    goalState() {
        let date = new Date()
        let goalDate
        (this.last_click) ? goalDate = this.last_click : goalDate = this.created_at
        if ((this.formatDate(goalDate)[0] < date.getFullYear()) || (this.formatDate(goalDate)[1] < date.getMonth())) {
            this.status = 'dead'}
        else if ((date.getDate() - this.formatDate(goalDate)[2]) > 1) {
            this.status = 'dead';}
        else if ((date.getDate() - this.formatDate(goalDate)[2]) == 1) {
            this.status = 'late';}
        else this.status = 'alive';
    }
    //format date for comparison
    formatDate(timeEntry) {
        console.log(timeEntry)
        let data = timeEntry.split("")
        let result = [
        parseInt(data.slice(0,4).join("")),
        parseInt(data.slice(5,7).join("")),
        parseInt(data.slice(8,10).join(""))
        ]
        return result
    }

}