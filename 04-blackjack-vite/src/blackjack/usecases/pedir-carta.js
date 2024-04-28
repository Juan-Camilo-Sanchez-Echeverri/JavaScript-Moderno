/**
 * Permite tomar una carta del deck
 * @param {Array<String>} deck es un array de string
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
	if (deck.length === 0) {
		throw 'No hay cartas en el deck';
	}
	return deck.pop();
};
