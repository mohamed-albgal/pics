import credentials from "../.env/keys.js";
import Unsplash from 'unsplash-js';

const search = async (term) => {
	const unsplash = new Unsplash({accessKey:credentials.unsplash.accessKey});
	const response = await unsplash.search.photos(term, 1, 10, {orientation: "landscape"})
	let data = await response.json();
	return data

}

export default search;