/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {
	console.log(import.meta.env);
	const html = `
    variables : 
    <ul>
      <li>mode: ${import.meta.env.MODE}</li>
      <li>base url: ${import.meta.env.BASE_URL}</li>
      <li>dev: ${import.meta.env.DEV}</li>
      <li>prod: ${import.meta.env.PROD}</li>
      <li>ssr: ${import.meta.env.SSR}</li>
      <li>API KEY: ${import.meta.env.VITE_API_KEY}</li>

  `;

	element.innerHTML = html;
};
