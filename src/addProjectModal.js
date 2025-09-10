
import { displayProjectCards } from './displayProjects.js';
import Project from './Project.js';
import { addNewProject, getProjects } from './projectsController.js';
import './addProjectModal.css';

export default function displayAddProjectModal() {

    const mainContainer = document.querySelector('.main-container');

    const dialog = document.createElement('dialog');
    dialog.classList.add('project-dialog');

    const closeButtonDiv = document.createElement('div');
    closeButtonDiv.classList.add('close-button');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';

    closeButtonDiv.appendChild(closeButton);

    const h1 = document.createElement('h1');
    h1.textContent = 'Add Project';

    const formDiv = document.createElement('div');
    formDiv.classList.add('form');

    const form = document.createElement('form');

    const p1 = document.createElement('p');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'project-title');
    titleLabel.textContent = 'Title:';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'project-title');
    titleInput.setAttribute('id', 'project-title');

    p1.append(titleLabel, titleInput);

    const p2 = document.createElement('p');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'project-description');
    descriptionLabel.textContent = 'Description:';

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'project-description');
    descriptionInput.setAttribute('id', 'project-description');

    p2.append(descriptionLabel, descriptionInput);

    const addButtonDiv = document.createElement('div');
    addButtonDiv.classList.add('add-button');

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';

    addButtonDiv.appendChild(addButton);

    form.append(p1, p2, addButtonDiv);
    formDiv.appendChild(form);

    dialog.append(closeButtonDiv, h1, formDiv);

    mainContainer.appendChild(dialog);

    dialog.showModal();
    
    // listeners
    closeButton.addEventListener('click', () => dialog.close());
    
    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(!titleInput.value){
            alert('Title is required');
            return;
        }

        const newProject = new Project( titleInput.value, descriptionInput.value);

        addNewProject(newProject);
        displayProjectCards(getProjects());
        dialog.close();
    });

}