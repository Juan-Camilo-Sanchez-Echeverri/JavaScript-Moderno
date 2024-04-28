import { createTodoHtml } from './';

let element;
/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
	if (!element) element = document.querySelector(elementId);

	if (!element) throw new Error('element is required');

	element.innerHTML = '';

	todos.forEach((todo) => {
		element.append(createTodoHtml(todo));
	});
};
