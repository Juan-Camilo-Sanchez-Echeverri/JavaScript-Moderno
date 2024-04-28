import { heroes } from '../data/heroes.js';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {
	const renderHero = (hero) => {
		element.innerHTML = hero.name;
	};

	const renderTwoHeros = (hero1, hero2) => {
		element.innerHTML = `${hero1.name} and ${hero2.name}`;
	};

	const renderError = (error) => {
		element.innerHTML = error;
	};

	const id1 = '5d86371f1efebc31def272e2';
	const id2 = '5d86371f2343e37870b91ef1';

	Promise.all([
		findHero(id1), findHero(id2)
	])
		.then(([hero1, hero2]) => renderTwoHeros(hero1, hero2))
		.catch(renderError);

	// ! Forma 2
	// let hero1;
	// findHero(id1)
	// 	.then(hero => {
	// 		hero1 = hero;
	// 		return findHero(id2);
	// 	}).then(hero2 => {
	// 		renderTwoHeros(hero1, hero2);
	// 	})
	// 	.catch(renderError);

	// ! Forma 1
	// findHero(id1)
	// 	.then((hero1) => {

	// 		findHero(id2).then(hero2 => {

	// 			renderTwoHeros(hero1, hero2);
	// 		}).catch(renderError);

	// 	})
	// 	.catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		const hero = heroes.find((hero) => hero.id === id);

		if (hero) {
			resolve(hero);
			return;
		}

		reject(`Hero with id ${id} not found`);
	});
};

findHero('5d86371f1efebc31def272e2');
