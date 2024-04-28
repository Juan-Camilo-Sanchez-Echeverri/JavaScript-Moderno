class Persona {

	static _conteo = 0;
	static get conteo() {
		return Persona._conteo + ' instancias';
	}

	static mensaje(){
		console.log(this.nombre); // undefined
		console.log('Hola a todos, soy un metodo estatico');
	}

	nombre = '';
	codigo = '';
	frase = '';
	comida = '';

	constructor( nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'sin frase' ) {

		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;
		Persona._conteo++;
	}

	set setComidaFavorita(comida) {
		this.comida = comida.toUpperCase();
	}

	get getComidaFavorita() {
		return `La comida favorita de ${this.nombre} es ${this.comida}`;
	}

	quienSoy() {
		console.log('Soy ' + this.nombre + ' y mi identidad es ' + this.codigo);
	}

	miFrase() {
		this.quienSoy();
		console.log(`${this.codigo} dice: ${this.frase}`);
	}
}

const spiderman = new Persona( 'Peter Parker','Spiderman','Soy tu amigable vecino Spiderman' );
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// spiderman.nemesis = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);


console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);