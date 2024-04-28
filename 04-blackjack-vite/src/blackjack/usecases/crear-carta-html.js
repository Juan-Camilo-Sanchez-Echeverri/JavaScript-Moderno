/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imgCarta
 */
export const crearCartaHTML = (carta) => {
	if (!carta) throw new Error('Carta es necesario');

	const imgCarta = document.createElement('img');
	imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
	imgCarta.classList.add('carta');
	return imgCarta;
};
