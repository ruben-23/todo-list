
import displayProjects from './displayProjects';
import displaySidebar from './displaySidebar';
import displayTodos from './displayTodos';
import './style.css';
// import './addTodoModal.css';
import Project from './Project.js';
import Todo from './Todo.js';

let projects = [
    new Project('Project 0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    new Project('Project 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
]


displaySidebar();

const projectsTab = document.getElementById('projects');
const todosTab = document.getElementById('todos');

projectsTab.addEventListener('click', () => { displayProjects(projects) });
todosTab.addEventListener('click', () => { displayTodos(projects) });

displayProjects(projects);
// displayTodos(projects);