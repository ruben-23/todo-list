

import './addTodoModal.css';
import { displayItems } from './displayTodos.js';
import { getProjectById } from './projectsController.js';
import Todo from './Todo.js';

export default function displayEditTodoModal(todo, projects) {

    const mainContainer = document.querySelector('.main-container');

    const dialog = document.createElement('dialog');

    const closeButtonDiv = document.createElement('div');
    closeButtonDiv.classList.add('close-button');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';

    closeButtonDiv.appendChild(closeButton);

    const h1 = document.createElement('h1');
    h1.textContent = 'Add Todo';

    const formDiv = document.createElement('div');
    formDiv.classList.add('form');

    const form = document.createElement('form');

    const p1 = document.createElement('p');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'todo-title');
    titleLabel.textContent = 'Title:';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'todo-title');
    titleInput.setAttribute('id', 'todo-title');
    titleInput.value = todo.title;

    p1.append(titleLabel, titleInput);

    const p2 = document.createElement('p');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'todo-description');
    descriptionLabel.textContent = 'Description:';

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'todo-description');
    descriptionInput.setAttribute('id', 'todo-description');
    descriptionInput.value = todo.description;

    p2.append(descriptionLabel, descriptionInput);

    const p3 = document.createElement('p');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'todo-date');
    dateLabel.textContent = 'Due date:';

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'todo-date');
    dateInput.setAttribute('id', 'todo-date');
    dateInput.value = todo.dueDate;

    p3.append(dateLabel, dateInput);

    const p4 = document.createElement('p');

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'todo-priority');
    priorityLabel.textContent = 'Priority:';

    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('name', 'todo-priority');
    prioritySelect.setAttribute('id', 'todo-priority');

    const option1 = document.createElement('option');
    option1.setAttribute('value', 'Critical');
    option1.textContent = 'Critical';

    const option2 = document.createElement('option');
    option2.setAttribute('value', 'High');
    option2.textContent = 'High';

    const option3 = document.createElement('option');
    option3.setAttribute('value', 'Medium');
    option3.textContent = 'Medium';

    const option4 = document.createElement('option');
    option4.setAttribute('value', 'Low');
    option4.textContent = 'Low';

    // show the priority that is currently set as default
    const currentOption = (() => {
        switch(todo.priority){
            case 'Critical':
                return option1;
            case 'High':
                return option2;
            case 'Medium':
                return option3;
            case 'Low':
                return option4;
        }
    })();
    currentOption.selected = true;

    prioritySelect.append(option1, option2, option3, option4);

    p4.append(priorityLabel, prioritySelect);

    const p5 = document.createElement('p');

    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'todo-project');
    projectLabel.textContent = 'Project:';

    const projectSelect = document.createElement('select');
    projectSelect.setAttribute('name', 'todo-project');
    projectSelect.setAttribute('id', 'todo-project');

    for (const project of projects) {

        const option = document.createElement('option');
        option.setAttribute('value', project.id);
        option.textContent = project.title;

        // show the project that is currently set as default
        if( project.id === todo.projectId){
            option.selected = true;
        }

        projectSelect.appendChild(option);

    }

    p5.append(projectLabel, projectSelect);

    const p6 = document.createElement('p');

    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', 'todo-notes');
    notesLabel.textContent = 'Notes:';

    const notesTextarea = document.createElement('textarea');
    notesTextarea.setAttribute('name', 'todo-notes');
    notesTextarea.setAttribute('id', 'todo-notes');
    notesTextarea.setAttribute('rows', '4');
    notesTextarea.setAttribute('cols', '30');
    notesTextarea.value = todo.notes;

    p6.append(notesLabel, notesTextarea);

    const saveButtonDiv = document.createElement('div');
    saveButtonDiv.classList.add('add-button');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    saveButtonDiv.appendChild(saveButton);

    form.append(p1, p2, p3, p4, p5, p6, saveButtonDiv);
    formDiv.appendChild(form);

    dialog.append(closeButtonDiv, h1, formDiv);

    mainContainer.appendChild(dialog);

    dialog.showModal();
    
    // listeners
    closeButton.addEventListener('click', () => dialog.close());
    
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(!titleInput.value || !dateInput.value){
            alert('Title and Due Date are required');
            return;
        }

        // if the project has been changed create new todo else update the todo.
        if(projectSelect.value !== todo.projectId){
            // add todo to new project
            const newTodo = new Todo( titleInput.value,
                                    descriptionInput.value,
                                    dateInput.value,
                                    prioritySelect.value,
                                    projectSelect.value,
                                    notesTextarea.value );
            let newProject = getProjectById(projectSelect.value);
            newProject.addTodo(newTodo);

            // delete todo from old project
            let oldProject = getProjectById(todo.projectId);
            oldProject.removeTodo(todo.id);
        } else {
            let project = getProjectById(todo.projectId);
            let exisitingTodo = project.getTodoById(todo.id);
            exisitingTodo.updateTodo( titleInput.value,
                                      descriptionInput.value,
                                      dateInput.value,
                                      prioritySelect.value,
                                      projectSelect.value,
                                      notesTextarea.value );
        }

        displayItems(projects);
        dialog.close();
    });

}