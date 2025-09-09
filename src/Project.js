
import Todo from './Todo.js';

export default class Project {

    constructor(title, description) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.todos = [];
    }   

    addTodo(todo) {

        if(! todo instanceof Todo){
            console.error('Failed to add todo! The todo object must be of type Todo');
            return;
        }

        this.todos.push(todo);
    }

    removeTodo(id) {
        
        const todoIndex = this.todos.findIndex(todo => todo.id === id);

        if(todoIndex === -1) {
            console.error('Failed to delete todo! The todo was not found');
            return;
        }

        this.todos.splice(todoIndex, 1);
    }

    getTaskCount() {
        return this.todos.length;
    }

}