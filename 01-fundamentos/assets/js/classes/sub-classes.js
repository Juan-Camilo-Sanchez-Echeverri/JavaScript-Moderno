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

class Heroe extends Persona {

  clan = 'Sin clan';

  constructor(nombre,codigo,frase,comida,clan) {

    super(nombre,codigo,frase,comida);
    this.clan = 'Los Avengers';

  }

  quienSoy(){
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }

}

const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman','El pie de cereza de la tia May');

console.log(spiderman)
spiderman.quienSoy();

