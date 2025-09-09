import Project from './Project.js';

let projects = [
    new Project('Project 0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
]

function addNewProject(project) {
    projects.push(project);
}

function getProjects(){
    return projects;
}

function getProjectById(id) {
    return projects.find(project => project.id === id);
}


export {
    getProjects,
    addNewProject,
    getProjectById
}