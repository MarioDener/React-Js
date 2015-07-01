
import React from 'react'
import PokeTable from './components/PokeTable'

var pokemons = [
	{number:1,name:"Bulbasaur"},
	{number:2,name:"Ivysaur"},
	{number:3,name:"Venusaur"}
]

// var pokemon = pokemons[0];

React.render(<PokeTable pokemons={pokemons}/>, document.getElementById('container'));

// React.render(<PokeTable/>,document.getElementById('container'));
// Devolver un nuevo nombre al container con el h1