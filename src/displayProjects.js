
import './displayProjects.css';

export default function displayProjects(projects) {

    const mainContainer = document.querySelector('.main-container');

    const content = document.createElement('div');
    content.classList.add('content');

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const addButton = document.createElement('button');
    addButton.textContent = '+ Add Project';

    buttonsDiv.appendChild(addButton);

    const contentItems = document.createElement('div');
    contentItems.classList.add('content-items');

    for (let project of projects) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.setAttribute('data-id', project.id);

        const title = document.createElement('h2');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;
        
        const taskCount = document.createElement('p');
        taskCount.textContent = `No. of tasks: ${project.taskCount}`;

        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');

        const viewTasksButton = document.createElement('button');
        viewTasksButton.textContent = 'View tasks'

        cardButtons.appendChild(viewTasksButton);

        projectCard.append(title, description, taskCount, cardButtons);

        contentItems.appendChild(projectCard);
    }

    content.append(buttonsDiv, contentItems);
    mainContainer.appendChild(content);

}