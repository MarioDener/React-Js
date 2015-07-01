
import React from 'react'
import PokeRow from './PokeRow'


export default class PokeTable extends React.Component{
	render(){
		return <ul className="poketable">
			{
				// map lo que hace es mirar dentro de esta lista y ejecutar para cada uno de los elemntos que lo comprendan
				this.props.pokemons.map((pokemon) => {
					return < PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number} />
				})
			}
		</ul>
	}
}
