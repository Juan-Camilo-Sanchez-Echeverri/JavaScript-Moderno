function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido,
	};
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Juan', 'Perez');

// console.log(persona)

function imprimeArgumentos() {
	console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Juan', 'Hola');

const imprimeArgumentos2 = (edad, ...args) => {
	// console.log({ edad, args });
	return args;
};

console.log(imprimeArgumentos2(10, true, false, 'Juan', 'Hola'));

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
	10,
	true,
	false,
	'Juan',
	'Hola'
);
console.log({ casado, vivo, nombre, saludo });

const { nombre: nombrePersona, apellido } = crearPersona2('Maria', 'Perez');
console.log({ nombrePersona, apellido });

const tony = {
	nombre: 'Tony Stark',
	codeName: 'Ironman',
	vivo: false,
	edad: 40,
	trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

/* const imprimePropiedades = (personaje) => {
	console.log('nombre', personaje.nombre);
	console.log('codeName', personaje.codeName);
	console.log('vivo', personaje.vivo);
	console.log('edad', personaje.edad);
	console.log('trajes', personaje.trajes);
}; */

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
	console.log({ nombre });
	console.log({ codeName });
	console.log({ vivo });
	console.log({ edad });
	console.log({ trajes });
};

imprimePropiedades(tony);
