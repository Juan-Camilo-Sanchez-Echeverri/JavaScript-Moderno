/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
	const renderValue = (value) => {
		element.innerHTML = value;
	};

	Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
		renderValue
	);
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
