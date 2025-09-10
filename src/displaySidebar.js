
import './displaySidebar.css';

export default function displaySidebar() {
    const mainContainer = document.querySelector('.main-container');

    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebar');

    const sideItems = document.createElement('div');
    sideItems.classList.add('side-items');

    const projectsDiv = document.createElement('div');
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = "Projects";
    projectsDiv.setAttribute('id', 'projects');
    projectsDiv.appendChild(projectsTitle);

    const todosDiv = document.createElement('div');
    const todosTitle = document.createElement('h2');
    todosTitle.textContent = "Todos";
    todosDiv.setAttribute('id', 'todos');
    todosDiv.appendChild(todosTitle);

    sideItems.append(projectsDiv, todosDiv);
    sidebarDiv.appendChild(sideItems);

    mainContainer.appendChild(sidebarDiv);
}