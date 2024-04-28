const miModulo = (() => {
	'use strict';
	let e = [],
		t = ['C', 'D', 'H', 'S'],
		r = ['A', 'J', 'Q', 'K'],
		a = [],
		l = document.querySelector('#btnPedir'),
		n = document.querySelector('#btnDetener'),
		d = document.querySelectorAll('.divCartas'),
		s = document.querySelectorAll('small'),
		o = (t = 2) => {
			(e = i()), (a = []);
			for (let r = 0; r < t; r++) a.push(0);
			s.forEach((e) => (e.innerText = 0)),
				d.forEach((e) => (e.innerHTML = '')),
				(l.disabled = !1),
				(n.disabled = !1);
		},
		i = () => {
			e = [];
			for (let a = 2; a <= 10; a++) for (let l of t) e.push(a + l);
			for (let n of t) for (let d of r) e.push(d + n);
			return _.shuffle(e);
		},
		u = () => {
			if (0 === e.length) throw 'No hay cartas en el deck';
			return e.pop();
		},
		c = (e) => {
			let t = e.substring(0, e.length - 1);
			return isNaN(t) ? ('A' === t ? 11 : 10) : 1 * t;
		},
		$ = (e, t) => ((a[t] += c(e)), (s[t].innerText = a[t]), a[t]),
		g = (e, t) => {
			let r = document.createElement('img');
			(r.src = `./assets/cartas/${e}.png`),
				r.classList.add('carta'),
				d[t].append(r);
		},
		f = () => {
			let [e, t] = a;
			setTimeout(() => {
				t === e
					? alert('Nadie gana :(')
					: e > 21
					? alert('Computadora gana')
					: t > 21
					? alert('Jugador gana')
					: alert('Computadora gana');
			}, 100);
		},
		h = (e) => {
			let t = 0;
			do {
				let r = u();
				(t = $(r, a.length - 1)), g(r, a.length - 1);
			} while (t < e && e <= 21);
			f();
		};
	return (
		l.addEventListener('click', () => {
			let e = u(),
				t = $(e, 0);
			g(e, 0),
				t > 21
					? (console.warn('Perdiste'),
					  (l.disabled = !0),
					  (n.disabled = !0),
					  h(t))
					: 21 === t &&
					  (console.warn('21, genial!'),
					  (l.disabled = !0),
					  (n.disabled = !0),
					  h(t));
		}),
		n.addEventListener('click', () => {
			(l.disabled = !0), (n.disabled = !0), h(a[0]);
		}),
		{ nuevoJuego: o }
	);
})();
