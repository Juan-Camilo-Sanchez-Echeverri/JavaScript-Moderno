import { pedirCarta, valorCarta, crearCartaHTML, sleep  } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos de la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML donde se muestran las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = async (
	puntosMinimos,
	puntosHTML,
	divCartasComputadora,
	deck = []
) => {
	if (!puntosMinimos) throw new Error('Puntos mínimos son necesario');
	if (!puntosHTML) throw new Error('Puntos HTML son necesario');

	let puntosComputadora = 0;

	do {
		const carta = pedirCarta(deck);

		puntosComputadora = puntosComputadora + valorCarta(carta);
		puntosHTML.innerText = puntosComputadora;
		const imgCarta = crearCartaHTML(carta);
		divCartasComputadora.append(imgCarta);

		await sleep(350); //El delay entre carta y carta

		if (puntosMinimos > 21) {
			break;
		}
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	setTimeout(() => {
		if (puntosComputadora === puntosMinimos) {
			alert('Nadie gana :(');
		} else if (puntosMinimos > 21) {
			alert('Computadora gana');
		} else if (puntosComputadora > 21) {
			alert('Jugador Gana');
		} else {
			alert('Computadora Gana');
		}
	}, 100);
};
