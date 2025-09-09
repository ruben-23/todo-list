
import displayAddTodoModal from './addTodoModal';
import displayEditTodoModal from './editTodoModal.js';
import './displayTodos.css';


export function displayItems(projects) {
    const contentItems = document.querySelector('.content-items');
    contentItems.innerHTML = '';

    for(let project of projects){    
        const todos = project.todos;
        for (let todo of todos) {
            const todoCard = document.createElement('div');
            todoCard.classList.add('todo-card');

            todoCard.setAttribute('data-id', todo.id);

            const header = document.createElement('div');
            header.classList.add('header');

            const title = document.createElement('h2');
            title.textContent = todo.title;

            const check = document.createElement('div');
            check.classList.add('check');      

            if(todo.checked){
                    todoCard.classList.add('checked');
                    check.setAttribute('title', 'Click to mark as not done');
                    check.textContent = '✔'
                } else if(todoCard.classList.contains('checked')){
                    todoCard.classList.remove('checked');
                    check.setAttribute('title', 'Click to mark as done');
                } else {
                    check.setAttribute('title', 'Click to mark as done');
                }

            header.append(title, check);

            const description = document.createElement('p');
            description.textContent = todo.description;

            const dueDate = document.createElement('p');
            dueDate.textContent = `Due date: ${todo.dueDate}`;


            const priorityDiv = document.createElement('div');
            priorityDiv.classList.add('priority');

            const priorityIcon = document.createElement('div');
            priorityIcon.classList.add('priority-icon');

            switch (todo.priority) {
                case 'Critical':
                    priorityIcon.classList.add('priority-critical');
                    break;
                case 'High':
                    priorityIcon.classList.add('priority-high');
                    break;
                case 'Medium':
                    priorityIcon.classList.add('priority-medium');
                    break;
                case 'Low':
                    priorityIcon.classList.add('priority-low');
                    break;
            }

            const priorityLevel = document.createElement('p');
            priorityLevel.classList.add('priority-level');
            priorityLevel.textContent = `${todo.priority} priority`;

            priorityDiv.append(priorityIcon, priorityLevel);

            const cardButtons = document.createElement('div');
            cardButtons.classList.add('card-buttons');

            const viewTodosButton = document.createElement('button');
            viewTodosButton.textContent = 'View'
            const editTodosButton = document.createElement('button');
            editTodosButton.textContent = 'Edit'
            const deleteTodosButton = document.createElement('button');
            deleteTodosButton.textContent = 'Delete'

            cardButtons.append(viewTodosButton, editTodosButton, deleteTodosButton);

            todoCard.append(header, description, dueDate, priorityDiv, cardButtons);

            contentItems.appendChild(todoCard);
            
            // listeners
            check.addEventListener('click', () => {
 
                todo.toggleChecked();
                displayItems(projects);
            });

            deleteTodosButton.addEventListener('click', () => {
                project.removeTodo(todoCard.getAttribute('data-id'));
                displayItems(projects);
            });

            editTodosButton.addEventListener('click', () => {displayEditTodoModal(todo, projects);})
        }}
}


export default function displayTodo(projects) {

    const mainContainer = document.querySelector('.main-container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = '';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const addButton = document.createElement('button');
    addButton.textContent = '+ Add todo';

    buttonsDiv.appendChild(addButton);

    const contentItems = document.createElement('div');
    contentItems.classList.add('content-items');
    
    content.append(buttonsDiv, contentItems);
    mainContainer.appendChild(content);

    displayItems(projects);

    addButton.addEventListener('click', () => displayAddTodoModal(projects));

}