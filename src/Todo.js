
export default class Todo {

    constructor(title, description, dueDate, priority, projectId, notes) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId,
        this.notes = notes;
        this.checked = false;
    }

    toggleChecked() {
        this.checked === true ? this.checked = false : this.checked = true;
    }

    updateTodo(title, description, dueDate, priority, projectId, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId,
        this.notes = notes;
    }

}