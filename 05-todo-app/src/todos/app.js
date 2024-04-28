import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases/';

const elementIds = {
	ClearCompletedButton: '.clear-completed',
	DeleteTodoButton: '.destroy',
	NewTodoInput: '#new-todo-input',
	TodoFilters: '.filtro',
	TodoList: '.todo-list',
	PendingCount: '#pending-count',
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {

	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(elementIds.TodoList, todos);
		updatePendingCount();
	};

	const updatePendingCount = () => {
		renderPending(elementIds.PendingCount);
	};

	(() => {
		const app = document.createElement('div');
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();

	//Referencias HTML
	const newDescriptionInput = document.querySelector(elementIds.NewTodoInput);
	const todoListUL = document.querySelector(elementIds.TodoList);
	const ClearCompletedButton = document.querySelector(elementIds.ClearCompletedButton);
	const filtersLIs = document.querySelectorAll(elementIds.TodoFilters);

	//Eventos
	newDescriptionInput.addEventListener('keyup', (event) => {
		if (event.keyCode !== 13) return;
		if (event.target.value.trim().length === 0) return;

		todoStore.addTodo(event.target.value);
		displayTodos();
		event.target.value = '';
	});

	todoListUL.addEventListener('click', (event) => {
		const element = event.target.closest('[data-id]');
		todoStore.toggleTodo(element.getAttribute('data-id'));
		displayTodos();
	});

	todoListUL.addEventListener('click', (event) => {
		const isDestroyeElement = event.target.className === 'destroy';
		const element = event.target.closest('[data-id]');
		if (!element || !isDestroyeElement) return;

		todoStore.deleteTodo(element.getAttribute('data-id'));
		displayTodos();
	});

	ClearCompletedButton.addEventListener('click', () => {
		todoStore.deleteCompleted();
		displayTodos();
	});

	filtersLIs.forEach((element) => {
		element.addEventListener('click', (element) => {
			filtersLIs.forEach((el) => el.classList.remove('selected'));
			element.target.classList.add('selected');

			switch (element.target.text) {
				case 'Todos':
					todoStore.setFilter(Filters.All);
					break;
				case 'Pendientes':
					todoStore.setFilter(Filters.Pending);
					break;
				case 'Completados':
					todoStore.setFilter(Filters.Completed);
					break;
				default:
					break;
			}

			displayTodos();
		});
	});
};
