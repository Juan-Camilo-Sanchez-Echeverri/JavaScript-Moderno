import { heroes } from '../data/heroes.js';

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsAsyncComponent = async (element) => {

	const heroGenerator = getHeroGenerator();
	let isFinished = false;

	do {

		const { value, done } = await heroGenerator.next();
		isFinished = done;
		if (isFinished) break;

		element.innerHTML = value;

	} while ( !isFinished );

};

async function* getHeroGenerator() {

	for (const hero of heroes) {

		await sleep();
		yield hero.name;
	}
	return 'No more heroes';
}

const sleep = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
};
