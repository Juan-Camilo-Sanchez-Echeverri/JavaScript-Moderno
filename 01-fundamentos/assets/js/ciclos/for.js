const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

for (let index = 0; index < heroes.length; index++) {
	console.log(heroes[index]);
}

console.warn('For in');
for (let i in heroes) {
	console.log(heroes[i]);
}

console.warn('For of');
for (let heroe of heroes) {
	console.log(heroe);
}
