class Goal {
    constructor(data) {
        this.id = data.id
        this.target = data.target
        this.list_click = data.last_click
        this.level = data.level
        this.units = data.units
        this.created_at = data.created_at
    }
}