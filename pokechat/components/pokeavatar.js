
// Module dependencies

import React from 'react' // Forma de importar de javascript en EMACScript6
							// crearmos el archivo package.json e 
							// colocar en consola npm install --save react

export default class PokeAvatar extends React.Component{
	render (){
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
		return <img src={url} className="avatar"/>
	}
}