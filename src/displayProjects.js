
import displayAddProjectModal from './addProjectModal';
import './displayProjects.css';
import displayTodo from './displayTodos';
import { getProjectById } from './projectsController';

export function displayProjectCards(projects) {
    
    const contentItems = document.querySelector('.content-items');
    contentItems.innerHTML = '';
    
    for (let project of projects) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.setAttribute('data-id', project.id);

        const title = document.createElement('h2');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;
        
        const todoCount = document.createElement('p');
        todoCount.textContent = `No. of todos: ${project.getTodoCount()}`;

        const cardButtons = document.createElement('div');
        cardButtons.classList.add('project-card-buttons');

        const viewTodoButton = document.createElement('button');
        viewTodoButton.textContent = 'View todos'

        cardButtons.appendChild(viewTodoButton);
        projectCard.append(title, description, todoCount, cardButtons);
        contentItems.appendChild(projectCard);

        viewTodoButton.addEventListener('click', () => displayTodo([getProjectById(project.id)]));
    }
}

export default function displayProjects(projects) {

    // remove the displayTodos contents if present
    if (document.querySelector('.content'))
        document.querySelector('.content').remove();

    const mainContainer = document.querySelector('.main-container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = '';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const addButton = document.createElement('button');
    addButton.textContent = '+ Add Project';

    buttonsDiv.appendChild(addButton);

    const contentItems = document.createElement('div');
    contentItems.classList.add('content-items');

    content.append(buttonsDiv, contentItems);
    mainContainer.appendChild(content);

    displayProjectCards(projects);

    addButton.addEventListener('click', () => { displayAddProjectModal() });
}