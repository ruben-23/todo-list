
import './displayTodos.css';

export default function displayTodo(todos) {

    const mainContainer = document.querySelector('.main-container');

    const content = document.createElement('div');
    content.classList.add('content');

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const addButton = document.createElement('button');
    addButton.textContent = '+ Add todo';

    buttonsDiv.appendChild(addButton);

    const contentItems = document.createElement('div');
    contentItems.classList.add('content-items');

    for (let todo of todos) {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');

        todoCard.setAttribute('data-id', todo.id);

        const title = document.createElement('h2');
        title.textContent = todo.title;

        const description = document.createElement('p');
        description.textContent = todo.description;
        
        const dueDate = document.createElement('p');
        dueDate.textContent = `Due date: ${todo.dueDate}`;


        const priorityDiv = document.createElement('div');
        priorityDiv.classList.add('priority');

        const priorityIcon = document.createElement('div');
        priorityIcon.classList.add('priority-icon');

        switch(todo.priority){
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
        priorityLevel.textContent =`${ todo.priority} priority`;

        priorityDiv.append(priorityIcon, priorityLevel);


        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');

        const   editTodosButton = document.createElement('button');
        editTodosButton.textContent = 'Edit'
        const deleteTodosButton = document.createElement('button');
        deleteTodosButton.textContent = 'Delete'

        cardButtons.append(editTodosButton, deleteTodosButton);

        todoCard.append(title, description, dueDate, priorityDiv, cardButtons);

        contentItems.appendChild(todoCard);
    }

    content.append(buttonsDiv, contentItems);
    mainContainer.appendChild(content);

}