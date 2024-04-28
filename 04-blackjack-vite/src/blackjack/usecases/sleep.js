/**
 * Función para que las cartas se repartan de a una
 * @param {Number} ms: cantidad en milisegundos en mostrar la carta
 * @returns {Promise}
 */
export const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
