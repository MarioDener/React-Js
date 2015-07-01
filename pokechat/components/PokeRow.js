
import React from 'react'
import PokeAvatar from './pokeavatar'

export default class PokeRow extends React.Component{
	onClick(ev){
		alert(this.props.name);
	}

	render() {		
		return <li className="pokerow" onClick={this.onClick.bind(this)}>
			<PokeAvatar number={this.props.number} />
			{this.props.name}
		</li>
	}
}