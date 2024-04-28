/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwait2Component = async (element) => {

	console.time('start');

	/* 	const value1 = await slowPromise();
		const value2 = await mediumPromise();
		const value3 = await fastPromise(); */

	const [value1, value2, value3] = await Promise.all([
		slowPromise(),
		mediumPromise(),
		fastPromise()
	])

	element.innerHTML = `
		<div class="card">
			<h2>Async Await 2</h2>
			<p>${value1}</p>
			<p>${value2}</p>
			<p>${value3}</p>
		</div>
	`;

	console.timeEnd('start');
};

const slowPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Slow promise');
		}, 2000);
	});
};

const mediumPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Medium promise');
		}, 1500);
	});
};

const fastPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Fast promise');
		}, 1000);
	});
};
