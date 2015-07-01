
import React from 'react'
import PokeAvatar from './pokeavatar'

export default class PokeRow extends React.Component{
	render() {
		
		return <li className="pokerow">
			<PokeAvatar number={this.props.number} />
			{this.props.name}
		</li>
	}
}