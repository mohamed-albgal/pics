import React from 'react'

const ImageDisplay = ({searchTerm, imageURLs}) => {
	const getContent = () => {

		if (imageURLs.length && searchTerm.length)
			return imageURLs.map((elt, key) => {
				return(
					<a className="ui large image ui segment" key={key} href={`https://google.com/search?q=${searchTerm}`}>
						<img src={elt} alt="some pic couldn't be fetched" />
					</a>
				)
			});
		if (imageURLs.length && !searchTerm.length)
			return <h1>{`Unable to find images for "${searchTerm}"`}</h1>
		return <h1>Please enter a search term</h1>

	}

	return (
		<div className= "ui segment">
			{getContent()}
		</div>
	)
};
export default ImageDisplay