import Project from './Project.js';
import Todo from './Todo.js';
import { getProjectsFromLocalStorage, updateProjectsInLocalStorage } from './storageController.js';

let projects = getProjectsFromLocalStorage() || null;


function addProjects() {
    projects = [];
    projects.push(
        new Project('Project 0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        new Project('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        new Project('Project 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        new Project('Project 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    );
    addTodosToProjects();
    updateProjectsInLocalStorage();
}

function addTodosToProjects() {

    projects[0].addTodo(new Todo(
        'Design homepage',
        'Create homepage wireframes.',
        '2024-07-01',
        'High',
        projects[0].id,
        'Focus on navigation.',
        false
    ));
    projects[0].addTodo(new Todo(
        'Write About Us',
        'Draft company info.',
        '2024-07-05',
        'Medium',
        projects[0].id,
        'Coordinate with marketing.',
        false
    ));
    projects[0].addTodo(new Todo(
        'Setup analytics',
        'Add Google Analytics.',
        '2024-07-10',
        'Low',
        projects[0].id,
        'Test on browsers.',
        false
    ));

    projects[1].addTodo(new Todo(
        'Financial report',
        'Prepare Q2 report.',
        '2024-07-15',
        'Critical',
        projects[1].id,
        'Include revenue data.',
        false
    ));

    projects[3].addTodo(new Todo(
        'User  login',
        'Build auth system.',
        '2024-07-03',
        'Critical',
        projects[3].id,
        'Use OAuth 2.0.',
        false
    ));
    projects[3].addTodo(new Todo(
        'DB schema',
        'Design database.',
        '2024-07-07',
        'Medium',
        projects[3].id,
        'Ensure scalability.',
        false
    ));
    projects[3].addTodo(new Todo(
        'CI/CD setup',
        'Automate deployment.',
        '2024-07-12',
        'High',
        projects[3].id,
        'Use GitHub Actions.',
        false
    ));
}

if(!projects)
    addProjects();

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