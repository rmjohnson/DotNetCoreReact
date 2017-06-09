import 'whatwg-fetch';

export default class AjaxUtility {
	static getJson(url) {
		return fetch(url)
			.then(response => response.json())
			.catch(ex => console.log(ex));
	}
}