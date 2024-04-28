const miModulo = (() => {
	'use strict';

	let deck = [];
	const tipos = ['C', 'D', 'H', 'S'],
		especiales = ['A', 'J', 'Q', 'K'];

	let puntosJugadores = [];

	// Referencias del HTML
	const btnPedir = document.querySelector('#btnPedir'),
		btnDetener = document.querySelector('#btnDetener');

	const divCartasJugadores = document.querySelectorAll('.divCartas'),
		puntos = document.querySelectorAll('small');

	// Esta función inicializa el juego
	const inicializarJuego = (numJugadores = 2) => {
		deck = crearDeack();

		puntosJugadores = [];
		for (let i = 0; i < numJugadores; i++) {
			puntosJugadores.push(0);
		}

		puntos.forEach((elem) => (elem.innerText = 0));
		divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

		btnPedir.disabled = false;
		btnDetener.disabled = false;
	};

	// Esta función crea una nueva baraja
	const crearDeack = () => {
		deck = [];
		for (let i = 2; i <= 10; i++) {
			for (const tipo of tipos) {
				deck.push(i + tipo);
			}
		}

		for (const tipo of tipos) {
			for (const esp of especiales) {
				deck.push(esp + tipo);
			}
		}
		return _.shuffle(deck);
	};

	// Esta función me permite tomar una carta
	const pedirCarta = () => {
		if (deck.length === 0) {
			throw 'No hay cartas en el deck';
		}

		return deck.pop();
	};

	// Esta función me permite saber el valor de la carta
	const valorCarta = (carta) => {
		const valor = carta.substring(0, carta.length - 1);
		return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
	};

	// Turno: 0 = primer jugador y el último será la computadora
	const acumularPuntos = (carta, turno) => {
		puntosJugadores[turno] += valorCarta(carta);
		puntos[turno].innerText = puntosJugadores[turno];
		return puntosJugadores[turno];
	};

	const crearCarta = (carta, turno) => {
		const imgCarta = document.createElement('img');
		imgCarta.src = `./assets/cartas/${carta}.png`;
		imgCarta.classList.add('carta');
		divCartasJugadores[turno].append(imgCarta);
	};

	const determinarGanador = () => {
		const [puntosMinimos, puntosComputadora] = puntosJugadores;

		setTimeout(() => {
			if (puntosComputadora === puntosMinimos) {
				alert('Nadie gana :(');
			} else if (puntosMinimos > 21) {
				alert('Computadora gana');
			} else if (puntosComputadora > 21) {
				alert('Jugador gana');
			} else {
				alert('Computadora gana');
			}
		}, 100);
	};

	// Turno de la computadora
	const turnoComputadora = (puntosMinimos) => {
		let puntosComputadora = 0;

		do {
			const carta = pedirCarta();

			puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

			crearCarta(carta, puntosJugadores.length - 1);
		} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

		determinarGanador();
	};

	// Eventos

	btnPedir.addEventListener('click', () => {
		const carta = pedirCarta();
		const puntosJugador = acumularPuntos(carta, 0);

		crearCarta(carta, 0);

		if (puntosJugador > 21) {
			console.warn('Perdiste');
			btnPedir.disabled = true;
			btnDetener.disabled = true;

			turnoComputadora(puntosJugador);
		} else if (puntosJugador === 21) {
			console.warn('21, genial!');
			btnPedir.disabled = true;
			btnDetener.disabled = true;

			turnoComputadora(puntosJugador);
		}
	});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;

		turnoComputadora(puntosJugadores[0]);
	});

	return {
		nuevoJuego: inicializarJuego,
	};
})();
