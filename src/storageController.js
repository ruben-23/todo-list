
import Project from "./Project";
import { getProjects } from "./projectsController";
import Todo from "./Todo";

function getProjectsFromLocalStorage() {

    const retrivedProjects =  JSON.parse(localStorage.getItem('projects'));

    // return if no projects are stored
    if(!retrivedProjects)
        return;
    
    let projects = [];

    for(const project of retrivedProjects){

        const newProject = new Project(project.title, project.description)
        newProject.updateId(project.id);
        
        const todos = project.todos;
        for(const todo of todos) {

            let newTodo = new Todo( todo.title,
                                         todo.description,
                                         todo.dueDate,
                                         todo.priority ,
                                         todo.projectId,
                                         todo.notes,
                                         todo.checked);
            newTodo.updateId(todo.id);
            newProject.addTodo(newTodo);
        }

        projects.push(newProject);

    }
    
    return projects;
}

function updateProjectsInLocalStorage() {
    const projects = getProjects();
    // remove old projects
    localStorage.removeItem('projects');
    // add new projects
    localStorage.setItem('projects', JSON.stringify(projects));
}

export {
    getProjectsFromLocalStorage,
    updateProjectsInLocalStorage
};