let a = 10;

if (a >= 10) {
	// undefined, null, 0, una asignación
	console.log('a es mayor o igual 10');
} else {
	console.log('a es menor a 10');
}

// console.log('finish');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, etc
console.log({ dia });

if (dia === 0) {
	console.log('Domingo');
} else if (dia === 1) {
	console.log('Lunes');
} else if (dia === 2) {
	console.log('Martes');
} else {
	console.log('No es Lunes, Martes o Domingo');
}

// Sin usar If Else, o Switch, únicamente objetos

const dias = {
	0: 'Domingo',
	1: 'Lunes',
	2: 'Martes',
	3: 'Miércoles',
	4: 'Jueves',
	5: 'Viernes',
	6: 'Sábado',
};

console.log(dias[dia]);

const diasArray = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];

console.log(diasArray[dia] || 'Día no definido');
