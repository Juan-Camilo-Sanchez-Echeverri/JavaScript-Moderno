/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
	// const myGenerator = myFirstGenerator();
	// console.log(myGenerator.next());

	const genId = idGenerator();

	const btn = document.createElement('button');
	btn.innerText = 'Generar ID';
	element.append(btn);

	const renderButton = () => {
		const { value } = genId.next();
		btn.innerHTML = `Generar ID: ${value}`;
	};

	btn.addEventListener('click', renderButton);
};

function* idGenerator() {
	let currentId = 0;
	while (true) {
		yield`2023 - ${++currentId}`;
	}
}

function* myFirstGenerator() {
	yield 'Primero';
	yield 'Segundo';
	yield 'Tercero';
	yield 'Cuarto';

	return 'Ya no hay más';
}
