import React, { Component } from 'react';

class CatList extends Component {   

	render() {
		let cats = this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id}  width="200" height="200"/>)
		return (
			<div> Cat List
			{cats}
			</div>
			)
	}

}

export default CatList;