import { heroes } from '../data/heroes.js';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asynComponent = (element) => {
	const id = '5d86371f1efebc31def272e2';
	console.log('Init async component')

	findHero(id)
		.then((name) => (element.innerHTML = name))
		.catch((error) => (element.innerHTML = error));

		console.log('End async component')
}; 

/**
 *
 * @param {String} id
 */
const findHero = async (id) => {

	const hero = heroes.find((hero) => hero.id === id);
	if(!hero) throw new Error(`Hero with id ${id} not found`);

	return hero?.name;
};
