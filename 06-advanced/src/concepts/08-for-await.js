import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {

	const id = '5d86371f1efebc31def272e2';

  const heroId = heroes.map(hero => hero.id);

  const herosPromises = getHeroesAsync(heroId);
  
  for await (const hero of herosPromises) {
    element.innerHTML += `
      <div class="card">
        <h3>${hero.name}</h3>
      </div>
    `;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

	const heroPromises = [];

	heroIds.forEach((id) => {
		heroPromises.push(getHeroAsync(id));
	});

	return heroPromises;
};

const getHeroAsync = async (id) => {
	await new Promise((resolve) => {
		setTimeout(() => resolve(), 1000);
	});

	return heroes.find((hero) => hero.id === id);
};
