const fher = {
	nombre: 'Fernando',
	edad: 32,
	imprimir() {
		console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
	},
};

const mayra = {
	nombre: 'Mayra',
	edad: 18,
	imprimir() {
		console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
	},
};

fher.imprimir();
mayra.imprimir();

function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
	this.imprimir = () => `Nombre: ${this.nombre} - edad: ${this.edad}`;
}

const maria = new Persona('Maria', 18);
const melisa = new Persona('Melisa', 29);
console.log(maria);
console.log(maria.imprimir());
console.log(melisa);
console.log(melisa.imprimir());
