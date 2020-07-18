class Goal {
    constructor(data) {
        this.id = data.id
        this.target = data.target
        this.last_click = data.last_click
        this.level = data.level
        this.units = data.units
        this.created_at = data.created_at
    }

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

}