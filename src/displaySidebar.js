
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
    projectsDiv.appendChild(projectsTitle);

    const tasksDiv = document.createElement('div');
    const tasksTitle = document.createElement('h2');
    tasksTitle.textContent = "Tasks";
    tasksDiv.appendChild(tasksTitle);

    sideItems.append(projectsDiv, tasksDiv);
    sidebarDiv.appendChild(sideItems);

    mainContainer.appendChild(sidebarDiv);
}