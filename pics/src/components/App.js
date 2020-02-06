import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import ImageDisplay from "./ImageDisplay"
import credentials from "../.env/keys.js";
import Unsplash from 'unsplash-js';

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [imageURLs, setImageURLs] = useState([]);
	useEffect(() => {
		requestAndSetImageURLs();
	}, [searchTerm])

	const requestAndSetImageURLs = async () => {
		let unsplash =  new Unsplash({accessKey:credentials.unsplash.accessKey});
		let response = await unsplash.search.photos(searchTerm, 2, 10);
		let data = await response.json();
		setImageURLs(data.results.map(elt => elt.urls.regular));
	}

	return (
		<div className="ui container" style={{marginTop: '40px'}}>
			<SearchBar extractTerm={setSearchTerm}/>
			<div className="four column grid center aligned">
			<ImageDisplay searchTerm={searchTerm} imageURLs={imageURLs} />
			</div>
		</div>
	)
}
export default App;