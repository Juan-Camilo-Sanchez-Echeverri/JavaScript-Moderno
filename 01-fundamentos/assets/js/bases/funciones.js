function saludar(nombre) {
	console.log('Hola ' + nombre);
}

const saludar2 = function (nombre) {
	console.log('Hola', nombre);
};

const saludarFlecha = () => {
	console.log('Hola flecha');
};

const saludarFlecha2 = (nombre) => {
	console.log('Hola ' + nombre);
};

const retornoSaludar = saludar('Camilo', 40, true, 'Colombia');

/* console.log({ retornoSaludar });
saludar2('Juan');
saludarFlecha();
saludarFlecha2('Camilo'); */

function sumar(a, b) {
	return a + b;
}

const sumar2 = (a, b) => {
	return a + b;
};

const sumar3 = (a, b) => a + b;

function getAleatorio() {
	return Math.round(Math.random() * 10);
}

const getAleatorio2 = () => Math.random();

console.log(sumar(1, 2));
console.log(sumar2(1, 2));
console.log(sumar3(1, 2));
console.log(getAleatorio());
console.log(getAleatorio2());
